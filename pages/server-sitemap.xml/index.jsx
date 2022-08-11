import { getServerSideSitemap } from 'next-sitemap';

import { getAllCountriesQuery } from 'lib/queries';

const siteUrl =
  process.env.NEXT_PUBLIC_DOMAIN ?? 'https://globaltreatydialogues.org/';

export const getServerSideProps = async (context) => {
  const res = await getAllCountriesQuery();

  const fields = res[0].countryPage.map((country) => ({
    loc: `${siteUrl}country/${country.pageUrl}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(context, fields);
};

export default function Site() {}
