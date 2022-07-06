export default {
    name: 'countryPresenceSection',
    title: 'Country Presence Section',
    type: 'document',
    fields: [
      {
        name: 'countryPresenceCards',
        title: 'Country Presence Cards',
        type: 'array',
        of: [{type: 'countryPresenceCard'}],
      }, 
    ],   
  }