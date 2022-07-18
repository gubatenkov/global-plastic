import Head from 'next/head'

import {  
  MainLayout, 
  TargetSection,
  CountryPresenceSection,
  BigMapSection,
  RegionsSection,
  LinksSection,
} from 'components'
import { getCountriesFieldsQuery } from 'lib/queries';

export const getStaticProps = async () => {
  const data = await getCountriesFieldsQuery();

  return {
    props: { page: data[0] },
  };
};

export default function Countries({ page }) {
  const {pageTitle, pageDescription, countryPresenceCards, targetSectionCountriesPage, 
    regionsSectionCountriesPage, linksSectionCountriesPage, menu: { pageMenu }, socials: { pageSocials }} = page;
    
  return (
    <div className="countries">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout menu={pageMenu} socials={pageSocials}>
        <TargetSection data={targetSectionCountriesPage} />
        <CountryPresenceSection data={countryPresenceCards} />
        <BigMapSection />
        <RegionsSection data={regionsSectionCountriesPage}/>
        <LinksSection data={linksSectionCountriesPage} />
      </MainLayout>
    </div>
  )
}