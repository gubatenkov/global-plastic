export default {
  name: 'meta',
  title: 'Add meta page info',
  type: 'object',
  fields: [
    {
      name: 'pageTitle',
      title: 'Add page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageDescription',
      title: 'Add page description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ogTitle',
      title: 'Og Title',      
      type: 'string',
    },
    {
      name: 'ogDescription',
      title: 'Og Description',      
      type: 'string',
    },
    {
      name: 'twitterSite',
      title: 'Twitter Site',      
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',      
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',      
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',      
      type: 'image',
    },  
  ]
}