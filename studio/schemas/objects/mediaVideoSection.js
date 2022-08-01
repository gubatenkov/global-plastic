export default {
  name: 'mediaVideoSection',
  title: '#3 Mediapage section with video',
  type: 'object',
  fields: [
    {
      name: 'country',
      type: 'string',
      title: 'Add country name',
      validation: Rule => Rule.required()
    },
    {
      name: 'region',
      type: 'string',
      title: 'Add region name',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Add section title',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Add text under title',
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      type: 'string',
      title: 'Add link url',
      validation: Rule => Rule.required()
    },
    {
      name: 'video',
      type: 'youtube',
      title: 'Add YouTube video',
      validation: Rule => Rule.required()
    },
  ]
}