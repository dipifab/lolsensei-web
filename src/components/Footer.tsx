import { A } from '@solidjs/router';
import { RIOT_DISCLAIMER } from '../data/content';

export default function Footer() {
  return (
    <footer class="w-full py-12 border-t border-surface-variant/10 bg-surface-container-lowest">
      <div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div class="flex items-center gap-3">
          <img
            src="/images/logo-512.png"
            alt="LoL Sensei"
            width="96"
            height="96"
            class="w-24 h-24 object-contain drop-shadow-[0_0_10px_rgba(240,191,92,0.35)]"
          />
          <span class="text-lg font-headline font-extrabold uppercase tracking-widest text-on-surface/80">
            LoL Sensei
          </span>
        </div>

        <nav aria-label="Footer" class="flex gap-8">
          <A
            href="/terms"
            class="text-on-surface/40 hover:text-primary-container transition-colors text-sm font-body tracking-tight"
          >
            Terms
          </A>
          <A
            href="/privacy"
            class="text-on-surface/40 hover:text-primary-container transition-colors text-sm font-body tracking-tight"
          >
            Privacy
          </A>
          <a
            href="https://github.com/dipifab/lolai"
            target="_blank"
            rel="noopener noreferrer"
            class="text-on-surface/40 hover:text-primary-container transition-colors text-sm font-body tracking-tight"
          >
            GitHub
            <span class="sr-only"> (opens in new tab)</span>
          </a>
        </nav>

        <p class="text-on-surface/50 text-[10px] font-body tracking-tight text-center md:text-right max-w-md">
          &copy; 2026 LoL Sensei. {RIOT_DISCLAIMER}
        </p>
      </div>
    </footer>
  );
}
