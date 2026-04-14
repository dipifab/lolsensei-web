import { A } from '@solidjs/router';

export default function Footer() {
  return (
    <footer class="w-full py-12 border-t border-surface-variant/10 bg-surface-container-lowest">
      <div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div class="text-lg font-bold text-primary-container font-headline uppercase tracking-widest">
          LoL Sensei
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
          &copy; 2026 LoL Sensei. LoL Sensei isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
        </p>
      </div>
    </footer>
  );
}
