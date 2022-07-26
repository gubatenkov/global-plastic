import {  
  MainLayout,
  Meta,
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
  const {countryPresenceCards, targetSectionCountriesPage, 
    regionsSectionCountriesPage, linksSectionCountriesPage, menu: { pageMenu }, socials: { pageSocials } } = page;
    
  return (
    <div className="countries">
      <Meta data={page} />
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
