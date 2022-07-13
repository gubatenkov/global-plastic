export default {
  name: 'stakeholdersSection',
  type: 'object',
  title: '#10 Add stakeholders section slider cards',
  fields: [
    {
      name: 'stakeholdersSectionTitle',
      type: 'string',
      title: 'Add stakeholders section title'
    },
    {
      name: 'stakeholdersCards',
      type: 'array',
      title: 'Add stakeholders cards',
      of: [
        {
          name: 'stakeholdersCard',
          type: 'object',
          title: 'Add section card text',
          fields: [
            {
              name: 'stakeholdersCardText',
              type: 'text',
              title: 'Add card text',
              validation: Rule => Rule.required().min(1).max(555)
            },
            {
              name: 'stakeholdersCardAuthorName',
              type: 'string',
              title: 'Add card author name',
              validation: Rule => Rule.required().min(1).max(30)
            },
            {
              name: 'stakeholdersCardAuthorJob',
              type: 'string',
              title: 'Add card author job',
              validation: Rule => Rule.required().min(1).max(40)
            },
            {
              name: 'stakeholdersCardAuthorImage',
              type: 'image',
              title: 'Add card author image',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}