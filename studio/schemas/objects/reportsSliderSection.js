export default {
  name: 'reportsSliderSection',
  type: 'object',
  title: '#6 Reports & Guides section',
  fields: [
    {
      name: 'reportsGuidesSlider',
      title: 'Reports & Guides Slider',
      type: 'array',
      of: [{type: 'report'}],
      validation: Rule => Rule.required().min(3)
    }
  ]
}