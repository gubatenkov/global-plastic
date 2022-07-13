import Head from 'next/head'

import {  
  MainLayout, 
  TargetSection,
  CountryPresenceSection,
  BigMapSection,
  RegionsSection,
  LinksSection,
} from 'components'

export const getStaticProps = async () => {
  const url =
    'https://185dfub1.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27countries%27]';
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: { page: data.result[0] },
  };
};

export default function Countries({page}) {
  const {pageTitle, pageDescription, countryPresenceCards, targetSectionCountriesPage, regionsSectionCountriesPage, linksSectionCountriesPage} = page;

  return (
    <div className="countries">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <TargetSection data={targetSectionCountriesPage} />
        <CountryPresenceSection data={countryPresenceCards} />
        <BigMapSection />
        <RegionsSection data={regionsSectionCountriesPage}/>
        <LinksSection data={linksSectionCountriesPage} />
      </MainLayout>
    </div>
  )
}
