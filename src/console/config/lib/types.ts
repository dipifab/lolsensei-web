// Admin Runtime Config — TypeScript types
//
// Mirror dei modelli Pydantic di backend/app/schemas/admin_config.py.
// Manuale (no codegen): la sorgente autoritativa rimane il backend.
// Vedi dev-repository/wp-config-migration/design/api-contract.md §1.
//
// Discriminated union su `value_type`: ogni rule ha un literal corrispondente
// in modo che TypeScript possa restringere correttamente i campi a runtime.

export type ConfigValueType =
  | 'int'
  | 'float'
  | 'str'
  | 'bool'
  | 'enum'
  | 'list'
  | 'dict';

export type ConfigCategory =
  | 'tunable'
  | 'flag'
  | 'url'
  | 'public_id'
  | 'tuning';

export type ConfigSource =
  | 'admin_ui'
  | 'cli'
  | 'migration'
  | 'seed'
  | 'api';

// === ConfigValidationRule discriminated union ===

export interface IntRule {
  value_type: 'int';
  min?: number | null;
  max?: number | null;
  step?: number;
  ui_widget?: 'slider' | 'number';
}

export interface FloatRule {
  value_type: 'float';
  min?: number | null;
  max?: number | null;
  step?: number;
  ui_widget?: 'number';
}

export interface StrRule {
  value_type: 'str';
  regex?: string | null;
  max_length?: number;
  ui_widget?: 'text';
}

export interface BoolRule {
  value_type: 'bool';
  ui_widget?: 'toggle';
}

export interface EnumRule {
  value_type: 'enum';
  values: string[];
  ui_widget?: 'dropdown';
}

export interface ListRule {
  value_type: 'list';
  item_type?: 'str' | 'int' | 'float';
  min_items?: number;
  max_items?: number;
  ui_widget?: 'json' | 'tags';
}

export interface DictRule {
  value_type: 'dict';
  // Backend espone `schema` con alias (Pydantic DictRule.json_schema alias='schema').
  schema?: Record<string, unknown> | null;
  ui_widget?: 'json';
}

export type ConfigValidationRule =
  | IntRule
  | FloatRule
  | StrRule
  | BoolRule
  | EnumRule
  | ListRule
  | DictRule;

// === Config value type union ===
// Resolved value post-resolver (env > DB > Pydantic default), gia coerced.
// Nullable solo per `old_value` audit (prima entry seed = NULL).

export type ConfigValue =
  | number
  | boolean
  | string
  | unknown[]
  | Record<string, unknown>;

// === API Response/Request models ===

export interface AppConfigItem {
  key: string;
  value: ConfigValue;
  value_type: ConfigValueType;
  category: ConfigCategory;
  description: string | null;
  validation_rules: ConfigValidationRule | null;
  version: number;
  requires_restart: boolean;
  env_override_active: boolean;
  env_var_name: string | null;
  last_updated: string; // ISO-8601 UTC
  last_updated_by_email: string | null;
  last_updated_by_google_id: string | null;
}

export interface AppConfigListResponse {
  items: AppConfigItem[];
  total: number;
  by_category: Partial<Record<ConfigCategory, number>>;
}

export interface AppConfigPatchRequest {
  value_json: ConfigValue;
  change_reason: string;
  version: number;
}

export interface AppConfigAuditEntry {
  id: number;
  key: string;
  old_value: ConfigValue | null;
  new_value: ConfigValue;
  value_type: string;
  changed_by_google_id: string | null;
  changed_by_email: string | null;
  changed_at: string; // ISO-8601 UTC
  change_reason: string | null;
  source: ConfigSource;
  version_before: number | null;
  version_after: number;
}

export interface AppConfigAuditListResponse {
  entries: AppConfigAuditEntry[];
  total: number;
  page: number;
  per_page: number;
}

// === Filter shapes (UI -> API) ===

export interface ListConfigFilters {
  category?: ConfigCategory;
  q?: string;
  requires_restart?: boolean;
  env_override_active?: boolean;
}

export interface ListAuditFilters {
  key?: string;
  user_email?: string;
  date_from?: string; // ISO-8601
  date_to?: string;
  source?: ConfigSource;
  page?: number;
  per_page?: number;
}
