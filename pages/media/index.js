import { getMediaFieldsQuery } from 'lib/queries';
import {
  BigMapSection,
  BuildingProgramsSection,
  DialoguesSection,
  LinksSection,
  MainLayout,
  MediaHero,
  MediaVideoSection,
  Meta,
  MoreNewsSection,
  ReportsSection,
  UpdatesSliderSection,
} from 'components';

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
        <MediaVideoSection data={sections[2]} />
        <MoreNewsSection data={sections[3]} />
        <BuildingProgramsSection data={sections[4]} />
        <ReportsSection
          className="merektion"
          data={sections[5].reportsGuidesSlider}
        />
        <LinksSection data={sections[6]} />
        <DialoguesSection className="medialection" data={sections[7]} />
        <BigMapSection data={sections[8]} />
      </MainLayout>
    </div>
  );
}
