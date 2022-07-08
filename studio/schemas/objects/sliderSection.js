export default {
  name: 'sliderSection',
  title: 'Slider Section',
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
        },
        {
          name: 'subtitle',
          title: 'Slide subtitle',
          type: 'string',
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