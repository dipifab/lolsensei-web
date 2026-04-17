const eurFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'EUR',
});

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const percentFormatter = new Intl.NumberFormat('en-GB', {
  style: 'percent',
  maximumFractionDigits: 1,
});

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const dateTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

const integerFormatter = new Intl.NumberFormat('en-GB');

export function formatEur(cents: number): string {
  return eurFormatter.format(cents / 100);
}

export function formatUsd(decimalStr: string): string {
  return usdFormatter.format(parseFloat(decimalStr));
}

/**
 * Format a backend-provided decimal string as USD with 4 fraction digits.
 * Keeps the raw string in the input to preserve precision from the backend;
 * falls back to "$ 0.0000" when the value is not a finite number.
 */
export function formatUsd4(decimalStr: string): string {
  const n = parseFloat(decimalStr);
  return Number.isFinite(n) ? `$ ${n.toFixed(4)}` : '$ 0.0000';
}

export function formatPercent(rate: number): string {
  return percentFormatter.format(rate);
}

export function formatRate(decimalStr: string): string {
  return `${parseFloat(decimalStr).toFixed(2)} USD / 1M tokens`;
}

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

export function formatDateTime(iso: string | null): string {
  if (!iso) return '--';
  return dateTimeFormatter.format(new Date(iso));
}

export function formatInteger(value: number): string {
  return integerFormatter.format(value);
}
