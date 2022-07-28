export default {
  name: 'updatesSliderSection',
  title: '#2 Updates Slider Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
    },
    {
      name: 'updatesSlider',
      title: 'Treaty Updates Slider',
      type: 'array',
      of: [{ type: 'treatyUpdatesCard' }],
    },
  ]
}