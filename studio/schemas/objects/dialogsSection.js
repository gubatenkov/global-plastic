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
              validation: Rule => Rule.required().min(1).max(870)
            }, 
            {
              name: 'dialogsCardTitle',
              type: 'string',
              title: 'Add dialog card title under text',
              validation: Rule => Rule.required().min(1).max(30)
            }, 
            {
              name: 'dialogsCardLink',
              type: 'object',
              title: 'Add dialog card link text and URL',
              fields: [
                {
                  name: 'dialogsCardLinkText',
                  type: 'string',
                  title: 'Add title',
                  validation: Rule => Rule.required().min(1).max(190)
                },
                {
                  name: 'dialogsCardLinkURL',
                  type: 'url',
                  title: 'Add url',
                  validation: Rule => Rule.required()
                }
              ]
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