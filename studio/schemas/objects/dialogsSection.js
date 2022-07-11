export default {
  name: 'dialogsSection',
  title: '#14 Add dialogs section cards to the slider',
  type: 'object',
  fields: [
    {
      name: 'dialogsSectionTitle',
      type: 'string',
      title: 'Add dialogs slider section title'
    },
    {
      name: 'dialogsCards',
      type: 'array',
      title: 'Add dialog card with text and image',
      of: [
        {
          name: 'dialogsCard',
          type: 'object',
          title: 'Add dialog card content',
          fields: [
            {
              name: 'dialogsCardText',
              type: 'text',
              title: 'Add dialog card text',
            }, 
            {
              name: 'dialogsCardTitle',
              type: 'string',
              title: 'Add dialog card title under text',
            }, 
            {
              name: 'dialogsCardSubtitle',
              type: 'string',
              title: 'Add dialog card subtitle under title',
            }, 
            {
              name: 'dialogsCardImage',
              type: 'image',
              title: 'Add dialog card image',
            }, 
          ]
        }
      ]
    }
  ]
}