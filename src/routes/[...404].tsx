import { NoindexMeta } from '../components/seo/NoindexMeta';
import BareLayout from '../layouts/BareLayout';
import NotFoundPage from '../pages/NotFoundPage';

export default function NotFoundRoute() {
  return (
    <>
      <NoindexMeta />
      <BareLayout variant="404">
        <NotFoundPage />
      </BareLayout>
    </>
  );
}
