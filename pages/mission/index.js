import {
  BigMapSection,
  MainLayout,
  Meta,
  MissionCardsSection,
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
        <MissionHero {...sections[0]} />
        <MissionCTASection {...sections[1]} />
        <TextImgSection {...sections[2]} />
        <BigMapSection />
        <MissionCardsSection {...sections[3]} />
      </MainLayout>
    </div>
  );
}
