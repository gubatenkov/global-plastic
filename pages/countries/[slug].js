import Head from 'next/head'

import {  
  MainLayout, 
  CountryHero,
  UpcomingActivationsSection,
  StakeholderParticipationSection,
  StakeholderEngagementSection,
  EcoSentiment,
  LocalInsights,
  WasteSection,
  VideoSection,
  TargetCountrySection,
  PartnersSection,
  ReportsSection,
  
} from 'components'

export const getServerSideProps = async () => {
    const url =
      'https://185dfub1.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27country%27]';
    const response = await fetch(url);
    const data = await response.json();
    if (!data) {
      return { notFound: true };
    }
    return {
      props: { page: data.result[0] },
    };
  };

  export default function Country({page}) {
    const {pageTitle, pageDescription, countryHero, upcomingActivationsSlider, stakeholderParticipation, stakeholderEngagement, ecoSentiment, localInsights, wasteSector, videoSectionCountryPage, partnersSection, targetSectionCountryPage, reportsGuidesSlider} = page;

  return (
    <div className="country">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <CountryHero data={countryHero} />
        <UpcomingActivationsSection data={upcomingActivationsSlider} />
        <StakeholderParticipationSection data={stakeholderParticipation} />
        <StakeholderEngagementSection data={stakeholderEngagement} />        
        <EcoSentiment data={ecoSentiment} />
        <LocalInsights data={localInsights} />
        <WasteSection data={wasteSector} />        
        <VideoSection data={videoSectionCountryPage} />
        <TargetCountrySection data={targetSectionCountryPage} />
        <PartnersSection data={partnersSection} />
        <ReportsSection data={reportsGuidesSlider} />
      </MainLayout>
    </div>
  )
}