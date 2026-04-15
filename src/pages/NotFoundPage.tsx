import { A } from '@solidjs/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main class="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
        <span
          class="material-symbols-outlined text-6xl text-on-surface-variant mb-6"
          style={{ "font-variation-settings": "'FILL' 1" }}
        >
          explore_off
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight mb-6">
          Page <span class="text-primary">Not Found</span>
        </h1>
        <p class="text-on-surface-variant text-lg leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <A
          href="/"
          class="inline-block gold-gradient text-on-primary-fixed px-10 py-4 rounded-lg font-headline font-extrabold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(240,191,92,0.3)] transition-all"
        >
          Back to Home
        </A>
      </main>
      <Footer />
    </>
  );
}
