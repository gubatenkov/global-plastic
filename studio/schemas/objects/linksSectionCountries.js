export default {
  name: 'linksSectionCountries',
  title: 'Links Section Countries',
  type: 'object',
  fields: [
    {
      name: 'linksSectionTitle',
      title: 'Links Section Title',
      type: 'string',
    },
    {
      name: 'linksSectionList',
      title: 'Links Section List',
      type: 'array',
      of: [{type: 'linksCountries'}],
    },
  ],
}