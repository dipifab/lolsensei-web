import { getRequestEvent } from 'solid-js/web';
import { NoindexMeta } from '../components/seo/NoindexMeta';
import BareLayout from '../layouts/BareLayout';
import NotFoundPage from '../pages/NotFoundPage';

export default function NotFoundRoute() {
  // SSR-only: stamp the HTTP status so SolidStart's server-handler emits
  // a real 404 (was defaulting to 200 which is a soft-404 for crawlers).
  // Client-side navigation sets no status and that's fine.
  const event = getRequestEvent();
  if (event) {
    event.response.status = 404;
  }

  return (
    <>
      <NoindexMeta />
      <BareLayout variant="404">
        <NotFoundPage />
      </BareLayout>
    </>
  );
}
