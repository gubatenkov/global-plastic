export default {
  name: 'linksSectionPage',
  title: 'Links Section Countries',
  type: 'object',
  fields: [
    {
      name: 'linksSectionTitle',
      title: 'Links Section Title',
      type: 'string',
    },
    {
      name: 'linksSectionCountries',
      type: 'array',
      of: [
        {
          name: 'linksSectionCountry',
          type: 'string',
          title: 'Country Name',
          description: 'Link to country page will be automaticaly generated from the country name'
        },
      ]
    }
  ]
}