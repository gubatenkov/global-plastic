export default {
  name: 'tectionSection',
  title: '#5 Black section with Image',
  type: 'object',
  fields: [
    {
      name: 'tectionTitle',
      title: 'Section title',
      type: 'string',
    },
    {
      name: 'tectionSuptitle',
      title: 'Text under section title',
      type: 'string',
    },
    {
      name: 'tectionText',
      title: 'Section Text',
      type: 'string',
    },
    {
      name: 'tectionImg',
      title: 'Section Image',
      type: 'image',
    },
    {
      name: 'tectionLink',
      title: 'Section Link',
      type: 'object',
      fields: [
        {
          name: 'tectionLinkURL',
          type: 'url',
          title: 'Section Link URL'
        },
        {
          name: 'tectionLinkText',
          type: 'string',
          title: 'Section Link Text'
        },
      ]
    }
  ],
}