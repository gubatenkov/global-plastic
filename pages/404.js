import {MainLayout, Meta} from 'components';
import {Page404} from 'components';
import { getInvolvedFieldsQuery } from 'lib/queries';

export const getStaticProps = async () => {
  const data = await getInvolvedFieldsQuery();

  return {
    props: { page: data[0] },
  };
};

export default function Countries({ page }) {
  const {menu: { pageMenu }, socials: { pageSocials }} = page;

  return (
    <div className="involved">
      <Meta data={page} />
      <MainLayout menu={pageMenu} socials={pageSocials}>
        <Page404 />
      </MainLayout>
    </div>
  )
}