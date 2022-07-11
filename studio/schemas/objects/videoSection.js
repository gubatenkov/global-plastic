export default {
  name: 'videoSection',
  title: '#8 Section with Peter and video',
  type: 'object',
  fields: [
    {
      name: 'videoSectionTitle',
      type: 'string',
      title: 'Add section title',
    },
    {
      name: 'videoSectionQuote',
      type: 'text',
      title: 'Add quote text'
    },
    {
      name: 'videoSectionVideo',
      type: 'youtube',
      title: 'Add YouTube video'
    },
    {
      name: 'videoSectionAuthorImage',
      type: 'image',
      title: 'Add quote author avatar'
    },
    {
      name: 'videoSectionAuthorName',
      type: 'string',
      title: 'Add quote author name'
    },
    {
      name: 'videoSectionAuthorJob',
      type: 'string',
      title: 'Add quote author job'
    }
  ]
}