import {  
  MainLayout,
  Meta,
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
  ActionSection,
  ArchiveSection,  
  BigMapSection
} from 'components'
import { getCountryFieldsQuery } from 'lib/queries';

export const getServerSideProps = async (context) => {
    const slug = context.query.slug;
    const data = await getCountryFieldsQuery();

    return !data ? { notFound: true } : { props: { page: data[0], slug } }
  };

export default function Country({ page, slug }) {
  const pages = page.countryPage;
  const currentPage = pages.filter(el => el.pageUrl === slug);
  const { pageMeta, countryHero, upcomingActivationsSlider, 
    stakeholderParticipation, stakeholderEngagement, ecoSentiment, localInsights, 
    wasteSector, videoSectionCountryPage, partnersSection, targetSectionCountryPage, 
    reportsGuidesSlider, actionSlider, archiveSlider, bigMapSection } = currentPage[0];
  const { analytics, menu: { pageMenu }, socials: { pageSocials }} = page;
  
  return (
    <div className="country">
      <Meta data={{analytics, pageMeta}} />
      <MainLayout menu={pageMenu} socials={pageSocials}>
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
        <ReportsSection className='rection' data={reportsGuidesSlider} />
        <ActionSection data={actionSlider} />
        <ArchiveSection data={archiveSlider} />
        <BigMapSection data={bigMapSection} />
      </MainLayout>
    </div>
  )
}