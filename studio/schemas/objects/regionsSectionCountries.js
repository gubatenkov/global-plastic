export default {
  name: 'regionsSectionCountries',
  title: 'Regions Section Countries',
  type: 'object',
  fields: [
    {
      name: 'regionTitle',
      title: 'Regions Section Title',
      type: 'string',
    },
    {
      name: 'regionCards',
      title: 'Regions Section Slider',
      type: 'array',
      of: [{type: 'regionsSectionCard'}],
    },
  ],
}
