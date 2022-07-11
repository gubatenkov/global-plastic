export default {
  name: 'videoSectionCountry',
  title: 'Video Section Country',
  type: 'object',
  fields: [
    {
      name: 'videoSectionTitle',
      title: 'Quote Title',
      type: 'string',
    },
    {
      name: 'videoSectionQuote',
      title: 'Quote',
      type: 'string',
    },
    {
      name: 'videoSectionAuthorName',
      title: 'Quote Author Name',
      type: 'string',
    },
    {
      name: 'videoSectionAuthorJob',
      title: 'Quote Author Job',
      type: 'string',
    },
    {
      name: 'videoSectionAuthorImage',
      title: 'Quote Author Image',
      type: 'image',
    },
    {
      name: 'videoSectionVideo',
      title: 'You Tube Video',
      type: 'youtube',
    },
  ],
}
