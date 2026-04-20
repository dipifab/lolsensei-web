import { NoindexMeta } from '../components/seo/NoindexMeta';
import ConsoleLoginPage from '../pages/ConsoleLoginPage';

export default function ConsoleLoginRoute() {
  return (
    <>
      <NoindexMeta />
      <ConsoleLoginPage />
    </>
  );
}
