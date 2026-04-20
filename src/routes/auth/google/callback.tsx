import { NoindexMeta } from '../../../components/seo/NoindexMeta';
import OAuthCallbackHandler from '../../../pages/OAuthCallbackHandler';

export default function OAuthCallbackRoute() {
  return (
    <>
      <NoindexMeta />
      <OAuthCallbackHandler />
    </>
  );
}
