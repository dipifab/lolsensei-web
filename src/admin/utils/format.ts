const eurFormatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
});

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const percentFormatter = new Intl.NumberFormat('it-IT', {
  style: 'percent',
  maximumFractionDigits: 1,
});

const dateFormatter = new Intl.DateTimeFormat('it-IT', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const dateTimeFormatter = new Intl.DateTimeFormat('it-IT', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

export function formatEur(cents: number): string {
  return eurFormatter.format(cents / 100);
}

export function formatUsd(decimalStr: string): string {
  return usdFormatter.format(parseFloat(decimalStr));
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
