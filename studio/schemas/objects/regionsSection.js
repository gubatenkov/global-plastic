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
          ]
        },
      ]
    }
  ]
}