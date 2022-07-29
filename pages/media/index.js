import { getMediaFieldsQuery } from 'lib/queries';
import { MainLayout, MediaHero, MediaVideoSection, Meta, UpdatesSliderSection } from 'components';

export const getStaticProps = async () => {
  const data = await getMediaFieldsQuery();

  return {
    props: { data: data[0] },
  };
};

export default function Media({ data }) {
  const {
    sections,
    menu: { pageMenu },
    socials: { pageSocials },
  } = data;

  return (
    <div className="media">
      <Meta data={data} />
      <MainLayout menu={pageMenu} socials={pageSocials}>
        <MediaHero data={sections[0]} />
        <UpdatesSliderSection data={sections[1]} />
        <MediaVideoSection />
      </MainLayout>
    </div>
  );
}
