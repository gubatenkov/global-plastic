import Head from 'next/head'

import {  
  MainLayout, 
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
  DialoguesSection
} from 'components'
import { getHeroFieldsQuery } from 'lib/queries';

export default function Home({ data }) {
  const { pageTitle, pageDescription, sections } = data[0];

  return (
    <div className='home'>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <HeroSection data={sections[0]} />
        <SliderSection data={sections[1]} />
        <CardSection />
        <WideSliderSection />
        <TargetSection />
        <SponsorsSection />
        <BigMapSection />
        <RegionsSection />
        <VideoSection />
        <LinksSection />
        <StakeholdersSection />
        <NewsSection />
        <JoinSection />
        <PartnersSection />
        <DialoguesSection />
      </MainLayout>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await getHeroFieldsQuery();

  return {
    props: {
      data
    },
  }
}