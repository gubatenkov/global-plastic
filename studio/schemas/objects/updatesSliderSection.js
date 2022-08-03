export default {
  name: 'updatesSliderSection',
  title: '#2 Updates Slider Section',
  type: 'object',
  fields: [
    {
      name: 'newsLine',
      title: 'Section news line items',
      type: 'array',
      of: [
        { 
          type: 'object',
          fields: [
        {
          name: 'heroNewsLineText',
          title: 'Add news line text',
          type: 'string',
          validation: Rule => Rule.required().min(50),
        },
        { 
          name: 'heroNewsLineURL',
          title: 'Add news line URL',
          type: 'string',
          validation: Rule => Rule.required() 
        }]
      }],
      validation: Rule => Rule.required().min(4)
    },
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'updatesSlider',
      title: 'Treaty Updates Slider',
      type: 'array',
      of: [{ type: 'treatyUpdatesCard' }],
      validation: Rule => Rule.required().min(3)
    },
  ]
}