import { getMediaFieldsQuery } from 'lib/queries';
import { 
  DialoguesSection,
  LinksSection,
  MainLayout,
  MediaHero,
  MediaVideoSection,
  Meta,
  MoreNewsSection,
  ReportsSection,
  UpdatesSliderSection
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
        <MediaVideoSection />
        <ReportsSection
          className='merektion'
          data={sections[2].reportsGuidesSlider}
        />
        <MoreNewsSection data={sections[3]} />
        <LinksSection data={sections[4]} />
        <DialoguesSection 
          className='medialection'
          data={sections[5]}
        />
      </MainLayout>
    </div>
  );
}
