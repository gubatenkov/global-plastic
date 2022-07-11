export default {
  name: 'regionsSection',
  type: 'object',
  title: '#7 Region cards slider section',
  fields: [
    {
      name: 'regionTitle',
      type: 'string',
      title: 'Add region section title'
    },
    {
      name: 'regionCards',
      type: 'array',
      title: 'Add region cards',
      of: [
        {
          name: 'regionCard',
          type: 'object',
          title: 'Add region card',
          fields: [
            {
              name: 'regionCardImage',
              type: 'image',
              title: 'Add region card image'
            },
            {
              name: 'regionCardTitle',
              type: 'string',
              title: 'Add region card text'
            }
          ]
        },
      ]
    }
  ]
}