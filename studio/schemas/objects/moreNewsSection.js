export default {
  name: 'moreNewsSection',
  title: '#4 Add more news section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Add section title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'actionSlider',
      title: 'Add action slider cards',
      type: 'array',
      of: [{ type: 'action' }],
      validation: Rule => Rule.required().min(3).max(12)
    },
  ]
}