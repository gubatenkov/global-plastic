export default {
  name: 'archiveSection',
  title: 'Archive Section',
  type: 'object',
  fields: [
    {
      name: 'archiveSlide',
      title: 'Archive Slide',
      type: 'array',
      of: [{type: 'archive'}],
    },   
  ],
}