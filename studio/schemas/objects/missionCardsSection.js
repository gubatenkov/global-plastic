export default {
  name: 'missionCardsSection',
  type: 'object',
  title: 'Add Mission cards section',
  fields: [
    {
      name: 'card1',
      type: 'object',
      title: 'Add card 1 text',
      fields: [
        {
          name: 'card1Title',
          type: 'string',
          title: 'Add Card 1 title',
          validation: Rule => Rule.required(),
        },
        {
          name: 'card1Text',
          type: 'text',
          title: 'Add Card 1 text',
          validation: Rule => Rule.required(),
        }
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'card2',
      type: 'object',
      title: 'Add card 2 text',
      fields: [
        {
          name: 'card2Title',
          type: 'string',
          title: 'Add Card 2 title',
        },
        {
          name: 'card2Text',
          type: 'text',
          title: 'Add Card 2 text',
        }
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Add section title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Add text under the title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'smallCard1',
      type: 'object',
      title: 'Add small card 1',
      fields: [
        {
          name: 'smallCardTitle',
          type: 'string',
          title: 'Add small card 1 title',
          validation: Rule => Rule.required(),
        },
        {
          name: 'smallCardText',
          type: 'text',
          title: 'Add small card 1 text',
          validation: Rule => Rule.required(),
        }
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'smallCard2',
      type: 'object',
      title: 'Add small card 2',
      fields: [
        {
          name: 'smallCardTitle',
          type: 'string',
          title: 'Add small card 2 title',
          validation: Rule => Rule.required(),
        },
        {
          name: 'smallCardText',
          type: 'text',
          title: 'Add small card 2 text',
          validation: Rule => Rule.required(),
        }
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'smallCard3',
      type: 'object',
      title: 'Add small card 3',
      fields: [
        {
          name: 'smallCardTitle',
          type: 'string',
          title: 'Add small card 3 title',
          validation: Rule => Rule.required(),
        },
        {
          name: 'smallCardText',
          type: 'text',
          title: 'Add small card 3 text',
          validation: Rule => Rule.required(),
        }
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'bubbles',
      type: 'object',
      title: 'Add bubbles text',
      fields: [
        {
          name: 'top',
          type: 'string',
          title: 'Add top bubble text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'center',
          type: 'string',
          title: 'Add center bubble text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'right',
          type: 'string',
          title: 'Add right bubble text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'left',
          type: 'string',
          title: 'Add left bubble text',
          validation: Rule => Rule.required(),
        }
      ],
      validation: Rule => Rule.required(),
    }
  ],
  validation: Rule => Rule.required(),
}