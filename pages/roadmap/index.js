import {  
  MainLayout,
  Meta,
  RoadmapHero,
  RoadmapUpcomingActivations,
  RoadmapTreaty,
  RoadmapTargetSection,
  ArchiveSection,  
  BigMapSection
} from 'components'
import { getRoadmapFieldsQuery } from 'lib/queries';

export const getStaticProps = async () => {
  const data = await getRoadmapFieldsQuery();

  return {
    props: { page: data[0] },
  };
};

export default function Countries({ page }) {
  const {roadmapHeroSection, bigMapSection, roadmapUpcomingActivations, roadmapTreatySections, 
    roadmapTargetSection, roadmapArchiveSection, menu: { pageMenu }, socials: { pageSocials }} = page;

  return (
    <div className="roadmap">
      <Meta data={page} />
      <MainLayout menu={pageMenu} socials={pageSocials}>
        <RoadmapHero data={roadmapHeroSection} />
        <RoadmapUpcomingActivations data={roadmapUpcomingActivations} />
        <RoadmapTreaty data={roadmapTreatySections} />
        <RoadmapTargetSection data={roadmapTargetSection} />
        <BigMapSection data={bigMapSection} />
        <ArchiveSection data={roadmapArchiveSection} />
      </MainLayout>
    </div>
  )
}