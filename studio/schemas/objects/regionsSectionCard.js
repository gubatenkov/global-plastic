export default {
  name: 'regionsSectionCard',
  title: 'Regions Section Card',
  type: 'object',
  fields: [
    {
      name: 'regionCardImage',
      type: 'object',
      title: 'Add card image data',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Add image'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Add image alt description'
        }
      ]
    },
    {
      name: 'regionCardTitle',
      type: 'string',
      title: 'Add title'
    },
    {
      name: 'regionCardLink',
      type: 'string',
      title: 'Add link url'
    }
  ],
}