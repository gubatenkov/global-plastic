import Head from 'next/head'

import {  
  MainLayout, 
  CountryHero,
  UpcomingActivationsSection,
  StakeholderParticipationSection,
  StakeholderEngagementSection,
  EcoSentiment,
  LocalInsights,
  VideoSection,
  TargetSection,
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
  const {countryHero, upcomingActivationsSlider, stakeholderParticipation, stakeholderEngagement, ecoSentiment, localInsights, videoSectionCountryPage, targetSectionCountryPage} = page;

  return (
    <div className="country">
      <Head>
        <title>Global Plastic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <CountryHero data={countryHero} />
        <UpcomingActivationsSection data={upcomingActivationsSlider} />
        <StakeholderParticipationSection data={stakeholderParticipation} />
        <StakeholderEngagementSection data={stakeholderEngagement} />        
        {/* <EcoSentiment data={ecoSentiment} />
        <LocalInsights data={localInsights} /> */}
        <TargetSection data={targetSectionCountryPage} />
        <VideoSection data={videoSectionCountryPage} />
      </MainLayout>
    </div>
  )
}