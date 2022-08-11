import {  
  MainLayout,
  Meta,
  InvolvedHero,
  WideSliderSection,
  InvolvedForm, 
  TargetSection,
  StakeholdersSection,
  PartnersSection,
  BigMapSection,  
} from 'components'
import { getInvolvedFieldsQuery } from 'lib/queries';

export const getStaticProps = async () => {
  const data = await getInvolvedFieldsQuery();

  return {
    props: { page: data[0] },
  };
};

export default function Countries({ page }) {
  const {involvedHeroSection, bigMapSection, wideInvolvedSection, involvedFormSection, 
    targetSectionCountriesPage, stakeholdersSliderSection, partnersSection, 
    menu: { pageMenu }, socials: { pageSocials }} = page;

  return (
    <div className="involved">
      <Meta data={page} />
      <MainLayout menu={pageMenu} socials={pageSocials}>
        <InvolvedHero data={involvedHeroSection} />
        <WideSliderSection data={wideInvolvedSection} />
        <InvolvedForm data={involvedFormSection} />
        <TargetSection data={targetSectionCountriesPage} />
        <StakeholdersSection data={stakeholdersSliderSection} />
        <PartnersSection data={partnersSection} />
        <BigMapSection data={bigMapSection} />
      </MainLayout>
    </div>
  )
}