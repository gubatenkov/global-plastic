export default {
  name: 'partnersSection',
  type: 'object',
  title: '#13 Add partners logos section',
  fields: [
    {
      name: 'partnersTitle',
      type: 'string',
      title: 'Add section title',
    },
    {
      name: 'partnersCards',
      type: 'array',
      of: [
        {
          name: 'partnersCard',
          type: 'object',
          fields: [
            {
              name: 'partnersCardTitle',
              type: 'string',
              title: 'Add partners card title'
            },
            {
              name: 'partnersCardImages',
              type: 'array',
              title: 'Add partner logos',
              of: [
                {
                  type: 'image'
                }
              ]
            },
          ]
        }
      ]
    }
  ]
}