export default {
  name: 'wideSliderSection',
  title: '#4 Wide slider section',
  type: 'object',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{ 
        name: 'slide',
        title: 'Slide',
        type: 'object',
        fields: [
        {
          name: 'title',
          title: 'Slide title',
          type: 'string',
          validation: Rule => Rule.required().max(100)
        },
        {
          name: 'subtitle',
          title: 'Slide subtitle',
          type: 'string',
          validation: Rule => Rule.required().max(150)
        },
        {
          name: 'image',
          title: 'Slide image',
          type: 'image',
          validation: Rule => Rule.required()
        }
      ]
      }]
    },
  ],
}