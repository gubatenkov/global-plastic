export default {
    name: 'countries',
    title: 'Countries',
    type: 'document',
    fields: [
      {
        name: 'pageMeta',
        type: 'meta'
      },
      {
        name: 'targetSectionCountriesPage',
        title: 'Target Section Countries Page',
        type: 'targetSection',
      },
      {
        name: 'countryPresenceCards',
        title: 'Country Presence Cards',
        type: 'array',
        of: [{type: 'countryPresenceCard'}],
      },
      {
        name: 'regionsSectionCountriesPage',
        title: 'Regions Section Countries Page',
        type: 'regionsSectionCountries',
      },
      {
        name: 'linksSectionCountriesPage',
        title: 'Links Section Countries Page',
        type: 'linksSectionPage',
      },
      {
        name: 'bigMapSection',
        title: 'Add Big Map Section',
        type: 'bigMapSection'
      }
    ],   
  }