export default {
  name: 'sliderSection',
  title: '#2 Slider Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
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
          validation: Rule => Rule.required().max(60)
        },
        {
          name: 'subtitle',
          title: 'Slide subtitle',
          type: 'string',
          validation: Rule => Rule.required().max(120)
        },
        {
          name: 'image',
          title: 'Slide image',
          type: 'image',
        }
      ]
      }]
    },
  ],
}