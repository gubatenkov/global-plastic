export default {
  name: 'countryPages',
  title: 'Country Pages',
  type: 'document',
  fields: [
    {
      name: 'countryPage',
      title: 'Country Page',
      type: 'array',
      of: [{type: 'countrySpecific'}],
    }
  ],   
}