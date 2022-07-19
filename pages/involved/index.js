import Head from 'next/head'

import {  
  MainLayout,
  InvolvedHero,
  WideSliderSection,
  InvolvedForm, 
  TargetSection,
  StakeholdersSection,
  PartnersSection,  
} from 'components'
import { getInvolvedFieldsQuery } from 'lib/queries';

export const getStaticProps = async () => {
  const data = await getInvolvedFieldsQuery();

  return {
    props: { page: data[0] },
  };
};

export default function Countries({ page }) {
  const {pageTitle, pageDescription, involvedHeroSection, wideInvolvedSection, involvedFormSection, targetSectionCountriesPage, stakeholdersSliderSection, partnersSection, menu: { pageMenu }, socials: { pageSocials }} = page;
    console.log(page)
  return (
    <div className="involved">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout menu={pageMenu} socials={pageSocials}>
        <InvolvedHero data={involvedHeroSection} />
        <WideSliderSection data={wideInvolvedSection} />
        <InvolvedForm data={involvedFormSection} />
        <TargetSection data={targetSectionCountriesPage} />
        <StakeholdersSection data={stakeholdersSliderSection} />
        <PartnersSection data={partnersSection} />
      </MainLayout>
    </div>
  )
}