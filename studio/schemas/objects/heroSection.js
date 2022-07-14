export default {
  name: 'heroSection',
  title: '#1 Hero Section',
  type: 'object',
  fields: [
    {
      name: 'heroTitle',
      title: 'Title in center',
      type: 'string',
    },
    {
      name: 'heroSuptitle',
      title: 'Text above section title',
      type: 'string',
    },
    {
      name: 'heroBoldPanelText',
      title: 'Bold text on section panel',
      type: 'string',
    },
    {
      name: 'heroPanelText',
      title: 'Default text on section panel',
      type: 'string',
    },
    {
      name: 'heroURL',
      title: 'Link URL on section panel',
      type: 'url',
    },
    {
      name: 'heroNewsLine',
      title: 'Section news line items',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(4)
    }
  ],
}