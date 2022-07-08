export default {
  name: 'videoSection',
  title: 'Video Section',
  type: 'object',
  fields: [    
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
    },
    {
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
    },
    {
      name: 'quoteAuthorTitle',
      title: 'Quote Author Title',
      type: 'string',
    },
    {
      name: 'quoteAuthorImage',
      title: 'Quote Author Image',
      type: 'image',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
    },
  ],
}