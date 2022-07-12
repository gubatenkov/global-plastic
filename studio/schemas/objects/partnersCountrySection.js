export default {
  name: 'partnersCountrySection',
  title: 'Support Section',
  type: 'object',
  fields: [
    {
      name: 'partnersTitle',
      type: 'string',
      title: 'Partners Section Title',
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
              title: 'Partners Card Title'
            },
            {
              name: 'partnersCardImage',
              type: 'array',
              title: 'Partner Card Image',
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