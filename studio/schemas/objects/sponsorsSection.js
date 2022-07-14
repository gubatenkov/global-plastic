export default {
  name: 'sponsorsSection',
  title: '#6 Sponsors logos section',
  type: 'object',
  fields: [
    {
      name: 'sponsorsTitle',
      type: 'string',
      title: 'Add sponsors section title'
    },
    { name: 'sponsorsImages',
      type: 'array',
      title: 'Add sponsors logos',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required().min(7)
    }
  ]
}