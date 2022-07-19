export default {
  name: 'wideInvolved',
  title: 'Wide Slider section',
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
          title: 'Slide Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Slide Subtitle',
          type: 'string'
        },
        {
          name: 'image',
          title: 'Slide Image',
          type: 'image'
        }
      ]
      }]
    },
  ],
}