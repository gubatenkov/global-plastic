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
              title: 'Add card text'
            },
            {
              name: 'stakeholdersCardAuthorName',
              type: 'string',
              title: 'Add card author name'
            },
            {
              name: 'stakeholdersCardAuthorJob',
              type: 'string',
              title: 'Add card author job'
            },
            {
              name: 'stakeholdersCardAuthorImage',
              type: 'image',
              title: 'Add card author image'
            }
          ]
        }
      ]
    }
  ]
}