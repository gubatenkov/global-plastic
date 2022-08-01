export default {
  name: 'buildingProgramsSection',
  type: 'object',
  title: '#5 Add building programs section',
  fields: [
    {
      name: 'title',
      title: 'Add section title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'cards',
      title: 'Add slider cards',
      type: 'array',
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'Add slider card',
          fields: [
            {
              name: 'cardTitle',
              type: 'string',
              title: 'Add card title',
              validation: Rule => Rule.required()
            },
            {
              name: 'cardRegion',
              title: 'Card Region',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'cardCountry',
              title: 'Card Country',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'cardDate',
              type: 'string',
              title: 'Add card date',
              validation: Rule => Rule.required()
            },
            {
              name: 'cardLink',
              type: 'string',
              title: 'Add card link URL',
              validation: Rule => Rule.required()
            },
            {
              name: 'cardImage',
              type: 'image',
              title: 'Add card image',
              validation: Rule => Rule.required()
            },
          ],
        },
      ],
      validation: Rule => Rule.required().min(4)
    }
  ]
}