export default {
  name: 'mediaHeroSection',
  type: 'object',
  title: '#1 Mediapage Hero Section',
  fields: [
    {
      name: 'suptitle',
      type: 'string',
      title: 'Text above the title',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
    },
    {
      name: 'link',
      type: 'object',
      title: 'Section link',
      fields: [
      {
        name: 'linkText',
        type: 'string',
        title: 'Link text',
      },
      {
        name: 'linkUrl',
        type: 'string',
        title: 'Link url',
      }]
    }
  ]
}