import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main class="min-h-screen flex items-center justify-center px-8">
        <div class="text-center">
          <p class="text-8xl font-extrabold text-primary-container/20 font-headline mb-4">404</p>
          <h1 class="text-3xl font-extrabold tracking-tight mb-4 font-headline">Page Not Found</h1>
          <p class="text-on-surface-variant mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/en"
            class="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
          >
            <span class="material-symbols-outlined text-lg">arrow_back</span>
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
