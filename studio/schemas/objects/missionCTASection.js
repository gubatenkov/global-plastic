export default {
  name: 'missionCTASection',
  type: 'object',
  title: 'Add Mission CTA section with link',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Add section title',
      validation: Rule => Rule.required()
    },
    {
      name: 'linkUrl',
      title: 'Add link Url',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}