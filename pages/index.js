import {  
  MainLayout,
  Meta,
  HeroSection, 
  SliderSection, 
  CardSection, 
  WideSliderSection, 
  TargetSection, 
  SponsorsSection,
  BigMapSection,
  RegionsSection,
  VideoSection,
  LinksSection,
  StakeholdersSection,
  NewsSection,
  JoinSection,
  PartnersSection,
  DialoguesSection,
  ScrollSection
} from 'components'
import { getHomepageFieldsQuery } from 'lib/queries';

export const getStaticProps = async () => {
  const pageData = await getHomepageFieldsQuery();
  
  return {
    props: {
      data: pageData[0],
    },
  }
}

export default function Home({ data }) {
  const { sections, menu: { pageMenu }, socials: { pageSocials } } = data;

  return (
    <div className='home'>
      <Meta data={data} />
      <MainLayout menu={pageMenu} socials={pageSocials}>
        <HeroSection data={sections[0]} />
        <ScrollSection data={sections[1]} />
        <SliderSection data={sections[1]} /> 
        <CardSection data={sections[2]} />
        <WideSliderSection data={sections[3]} />
        <TargetSection data={sections[4]} />
        <SponsorsSection data={sections[5]} />
        <BigMapSection />
        <RegionsSection data={sections[6]} />
        <VideoSection data={sections[7]} />
        <LinksSection data={sections[8]} />
        <StakeholdersSection data={sections[9]} />
        <NewsSection data={sections[10]} />
        <JoinSection data={sections[11]} />
        <PartnersSection data={sections[12]} />
        <DialoguesSection data={sections[13]} />
      </MainLayout>
    </div>
  )
}

