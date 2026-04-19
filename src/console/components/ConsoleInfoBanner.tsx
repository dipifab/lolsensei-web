interface ConsoleInfoBannerProps {
  message: string;
  variant?: 'info' | 'warning';
}

export default function ConsoleInfoBanner(props: ConsoleInfoBannerProps) {
  const isWarning = () => props.variant === 'warning';

  return (
    <div
      class="flex items-center gap-3 rounded-lg border px-4 py-3 text-sm"
      classList={{
        'border-secondary/30 bg-secondary/5 text-on-surface': !isWarning(),
        'border-warning/30 bg-warning/5 text-on-surface': isWarning(),
      }}
    >
      <span
        class="text-lg shrink-0"
        classList={{
          'text-secondary': !isWarning(),
          'text-warning': isWarning(),
        }}
      >
        {isWarning() ? '\u26A0' : '\u2139'}
      </span>
      <span>{props.message}</span>
    </div>
  );
}
