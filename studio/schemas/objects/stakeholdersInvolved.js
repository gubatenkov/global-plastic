export default {
  name: 'stakeholdersInvolved',
  type: 'object',
  title: 'Stakeholders Slider Cards',
  fields: [
    {
      name: 'stakeholdersSectionTitle',
      type: 'string',
      title: 'Stakeholders Slider Title'
    },
    {
      name: 'stakeholdersCards',
      type: 'array',
      title: 'Stakeholders Cards',
      of: [
        {
          name: 'stakeholdersCard',
          type: 'object',
          title: 'Stakeholders Card',
          fields: [
            {
              name: 'stakeholdersCardText',
              type: 'text',
              title: 'Card Text',
            },
            {
              name: 'stakeholdersCardAuthorName',
              type: 'string',
              title: 'Card Author Name',
            },
            {
              name: 'stakeholdersCardAuthorJob',
              type: 'string',
              title: 'Card Author Job'
            },
            {
              name: 'stakeholdersCardAuthorImage',
              type: 'image',
              title: 'Card Author Image'
            }
          ]
        }
      ]
    }
  ]
}