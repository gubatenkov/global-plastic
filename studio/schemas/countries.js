export default {
    name: 'countries',
    title: 'Countries',
    type: 'document',
    fields: [
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
    ],   
  }