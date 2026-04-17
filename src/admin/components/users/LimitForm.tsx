import { Show, createEffect, createMemo, createSignal, createUniqueId } from 'solid-js';
import type { CreditOverride } from '../../types';
import type { SetLimitBody } from '../../api/users';
import ConfirmModal from '../shared/ConfirmModal';

interface LimitFormProps {
  current: CreditOverride | null;
  planLimits: CreditOverride | null;
  loading?: boolean;
  onSubmit: (body: SetLimitBody) => void;
  onRemove?: (reason: string) => void;
  removing?: boolean;
}

type FieldKey = 'daily' | 'weekly' | 'monthly';

const LABELS: Record<FieldKey, string> = {
  daily: 'Credits / day',
  weekly: 'Credits / week',
  monthly: 'Credits / month',
};

/**
 * Parsed state of a numeric override field:
 *  - `null` → override is off or the input is empty;
 *  - `'invalid'` → the input contains a non-parseable value;
 *  - `number` → a finite integer >= 0 is ready to be submitted.
 *
 * Using a tagged type avoids the `NaN` sentinel that previously leaked into
 * the form state and made validation branches harder to reason about.
 */
type ParsedValue = number | null | 'invalid';

function parseVal(text: string): ParsedValue {
  const t = text.trim();
  if (t === '') return null;
  const n = parseInt(t, 10);
  return Number.isFinite(n) ? n : 'invalid';
}

export default function LimitForm(props: LimitFormProps) {
  const [daily, setDaily] = createSignal<string>('');
  const [weekly, setWeekly] = createSignal<string>('');
  const [monthly, setMonthly] = createSignal<string>('');
  const [dailyOn, setDailyOn] = createSignal<boolean>(false);
  const [weeklyOn, setWeeklyOn] = createSignal<boolean>(false);
  const [monthlyOn, setMonthlyOn] = createSignal<boolean>(false);
  const [reason, setReason] = createSignal<string>('');
  const [submitted, setSubmitted] = createSignal<boolean>(false);
  const [removeOpen, setRemoveOpen] = createSignal<boolean>(false);
  const reasonId = createUniqueId();

  createEffect(() => {
    const cur = props.current;
    if (cur) {
      setDailyOn(cur.daily !== null);
      setDaily(cur.daily !== null ? String(cur.daily) : '');
      setWeeklyOn(cur.weekly !== null);
      setWeekly(cur.weekly !== null ? String(cur.weekly) : '');
      setMonthlyOn(cur.monthly !== null);
      setMonthly(cur.monthly !== null ? String(cur.monthly) : '');
    } else {
      setDailyOn(false);
      setDaily('');
      setWeeklyOn(false);
      setWeekly('');
      setMonthlyOn(false);
      setMonthly('');
    }
  });

  const dailyVal = createMemo<ParsedValue>(() => (dailyOn() ? parseVal(daily()) : null));
  const weeklyVal = createMemo<ParsedValue>(() => (weeklyOn() ? parseVal(weekly()) : null));
  const monthlyVal = createMemo<ParsedValue>(() => (monthlyOn() ? parseVal(monthly()) : null));

  const errors = createMemo(() => {
    const out: Partial<Record<FieldKey | 'global' | 'reason', string>> = {};
    const check = (key: FieldKey, v: ParsedValue) => {
      if (v === null) return;
      if (v === 'invalid') out[key] = 'Invalid number';
      else if (v < 0) out[key] = 'Must be >= 0';
    };
    check('daily', dailyVal());
    check('weekly', weeklyVal());
    check('monthly', monthlyVal());
    const anyOn = dailyOn() || weeklyOn() || monthlyOn();
    const anyValidValue =
      (dailyOn() && typeof dailyVal() === 'number')
      || (weeklyOn() && typeof weeklyVal() === 'number')
      || (monthlyOn() && typeof monthlyVal() === 'number');
    if (!anyOn || !anyValidValue) {
      out.global = 'A value is required when override is active (daily/weekly/monthly).';
    }
    const r = reason().trim();
    if (r.length < 5) out.reason = 'Minimum 5 characters';
    else if (r.length > 500) out.reason = 'Maximum 500 characters';
    return out;
  });

  const canSubmit = () => {
    const e = errors();
    return !e.daily && !e.weekly && !e.monthly && !e.global && !e.reason && !props.loading;
  };

  const pickNumber = (v: ParsedValue): number | null =>
    typeof v === 'number' ? v : null;

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setSubmitted(true);
    if (!canSubmit()) return;
    const body: SetLimitBody = {
      credits_daily: pickNumber(dailyVal()),
      credits_weekly: pickNumber(weeklyVal()),
      credits_monthly: pickNumber(monthlyVal()),
      reason: reason().trim(),
    };
    props.onSubmit(body);
  };

  const field = (
    key: FieldKey,
    on: () => boolean,
    setOn: (v: boolean) => void,
    val: () => string,
    setVal: (v: string) => void,
  ) => {
    const planVal = () => props.planLimits?.[key] ?? null;
    const err = () => (submitted() ? errors()[key] : undefined);
    return (
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-semibold uppercase tracking-wider text-primary">
          {LABELS[key]}
        </label>
        <div class="flex items-center gap-2">
          <label class="inline-flex items-center gap-1.5 text-xs text-on-surface-variant cursor-pointer">
            <input
              type="checkbox"
              checked={on()}
              onChange={(e) => setOn(e.currentTarget.checked)}
              disabled={props.loading}
              aria-label={`Enable override for ${LABELS[key]}`}
              class="accent-primary"
            />
            Override
          </label>
          <input
            type="number"
            min={0}
            step={1}
            value={val()}
            disabled={!on() || props.loading}
            onInput={(e) => setVal(e.currentTarget.value)}
            aria-label={LABELS[key]}
            aria-invalid={err() ? true : undefined}
            class="flex-1 rounded-lg border bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container disabled:opacity-50"
            classList={{
              'border-error': !!err(),
              'border-outline-variant': !err(),
            }}
          />
        </div>
        <p class="text-xs text-on-surface-variant">
          Plan: {planVal() !== null ? planVal() : 'unlimited'}
          <Show when={!on()}> &middot; using plan value</Show>
        </p>
        <Show when={err()}>
          <p class="text-xs text-error">{err()}</p>
        </Show>
      </div>
    );
  };

  const globalError = () => (submitted() ? errors().global : undefined);
  const reasonError = () => (submitted() ? errors().reason : undefined);

  return (
    <form onSubmit={handleSubmit} class="space-y-4" noValidate>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {field('daily', dailyOn, setDailyOn, daily, setDaily)}
        {field('weekly', weeklyOn, setWeeklyOn, weekly, setWeekly)}
        {field('monthly', monthlyOn, setMonthlyOn, monthly, setMonthly)}
      </div>

      <Show when={globalError()}>
        <p class="text-xs text-error">{globalError()}</p>
      </Show>

      <div>
        <label
          for={reasonId}
          class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
        >
          Reason <span class="text-error">*</span>
        </label>
        <textarea
          id={reasonId}
          value={reason()}
          onInput={(e) => setReason(e.currentTarget.value)}
          disabled={props.loading}
          rows={3}
          minLength={5}
          maxLength={500}
          aria-required={true}
          aria-invalid={reasonError() ? true : undefined}
          placeholder="e.g. downtime compensation incident 2026-04-15"
          class="w-full rounded-lg border bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-container disabled:opacity-50 resize-y"
          classList={{
            'border-error': !!reasonError(),
            'border-outline-variant': !reasonError(),
          }}
        />
        <div class="mt-1 flex justify-between text-xs">
          <Show
            when={reasonError()}
            fallback={<span class="text-on-surface-variant">Minimum 5, maximum 500 characters.</span>}
          >
            <span class="text-error">{reasonError()}</span>
          </Show>
          <span class="text-on-surface-variant">{reason().trim().length}/500</span>
        </div>
      </div>

      <div class="flex items-center gap-3 pt-2 border-t border-outline-variant/10">
        <button
          type="submit"
          disabled={props.loading}
          class="rounded-lg gold-gradient px-4 py-2 text-sm font-semibold text-on-primary-fixed hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary-container focus-visible:outline-offset-2"
        >
          {props.loading ? 'Saving...' : 'Apply override'}
        </button>
        <Show when={props.current !== null && props.onRemove}>
          <button
            type="button"
            onClick={() => setRemoveOpen(true)}
            disabled={props.removing}
            class="rounded-lg border border-error/40 bg-transparent px-4 py-2 text-sm font-semibold text-error hover:bg-error/10 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-error focus-visible:outline-offset-2"
          >
            Remove override
          </button>
        </Show>
      </div>

      <ConfirmModal
        open={removeOpen()}
        title="Remove credit override?"
        message="The user will revert to the standard plan limits."
        variant="danger"
        confirmLabel="Remove"
        requireReason
        reasonLabel="Removal reason"
        loading={props.removing}
        onConfirm={(r) => {
          setRemoveOpen(false);
          props.onRemove?.(r ?? '');
        }}
        onClose={() => setRemoveOpen(false)}
      />
    </form>
  );
}
