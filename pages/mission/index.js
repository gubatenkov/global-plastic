import {
  MainLayout,
  Meta,
  MissionCTASection,
  MissionHero,
  TextImgSection,
} from 'components';
import { getMissionFieldsQuery } from 'lib/queries';

export const getStaticProps = async () => {
  const data = await getMissionFieldsQuery();

  return {
    props: { data: data[0] },
  };
};

export default function Mission({ data }) {
  const {
    sections,
    menu: { pageMenu },
    socials: { pageSocials },
  } = data;

  return (
    <div className="mission">
      <Meta data={data} />
      <MainLayout menu={pageMenu} socials={pageSocials}>
        <MissionHero />
        <MissionCTASection />
        <TextImgSection />
      </MainLayout>
    </div>
  );
}