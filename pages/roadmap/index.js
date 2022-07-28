import {  
  MainLayout,
  Meta,
  RoadmapHero,
  // RoadmapUpcomingActivations,
  // RoadmapTreaty,
  RoadmapTargetSection,
  ArchiveSection  
} from 'components'
import { getRoadmapFieldsQuery } from 'lib/queries';

export const getStaticProps = async () => {
  const data = await getRoadmapFieldsQuery();

  return {
    props: { page: data[0] },
  };
};

export default function Countries({ page }) {
  const {roadmapHeroSection, roadmapUpcomingActivations, roadmapTargetSection, roadmapArchiveSection, menu: { pageMenu }, socials: { pageSocials }} = page;
  // console.log(page)
  return (
    <div className="roadmap">
      <Meta data={page} />
      <MainLayout menu={pageMenu} socials={pageSocials}>
        <RoadmapHero data={roadmapHeroSection} />
        <RoadmapTargetSection data={roadmapTargetSection} />
        <ArchiveSection data={roadmapArchiveSection} />
      </MainLayout>
    </div>
  )
}