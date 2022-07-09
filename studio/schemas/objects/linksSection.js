export default {
  name: 'linksSection',
  type: 'object',
  title: '#9 Add country highlights list of links',
  fields: [
    {
      name: 'linksSectionTitle',
      type: 'string',
      title: 'Add section title',
      validation: Rule => Rule.required()
    },
    {
      name: 'linksSectionCountries',
      type: 'array',
      of: [
        {
          name: 'linksSectionCountry',
          type: 'string',
          title: 'Add name of the country',
          description: 'Link to that particular country page will be automaticaly generated from the country name'
        },
      ]
    }
  ]
}