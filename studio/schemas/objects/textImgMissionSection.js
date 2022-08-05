export default {
  name: 'textImgMissionSection',
  type: 'object',
  title: 'Add section with text and image',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Add section title',
      validation: Rule => Rule.required()
    },
    {
      name: 'text',
      type: 'text',
      title: 'Add section text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Add section image',
      validation: Rule => Rule.required()
    }
  ]
}