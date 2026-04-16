export type ValidationErrors = Record<string, string>;

export function required(
  value: string | number | null | undefined,
  fieldName: string,
): string | undefined {
  if (value === null || value === undefined || value === '') {
    return `${fieldName} è obbligatorio`;
  }
  return undefined;
}

export function minMax(
  value: number,
  min: number,
  max: number,
  fieldName: string,
): string | undefined {
  if (value < min || value > max) {
    return `${fieldName} deve essere tra ${min} e ${max}`;
  }
  return undefined;
}

export function slugPattern(value: string): string | undefined {
  if (!/^[a-z0-9-]+$/.test(value)) {
    return 'Solo lettere minuscole, numeri e trattini';
  }
  return undefined;
}

export function priceValidation(
  cents: number,
  fieldName: string,
): string | undefined {
  if (!Number.isInteger(cents) || cents < 0) {
    return `${fieldName} deve essere un importo valido`;
  }
  return undefined;
}
