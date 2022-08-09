export default {
  name: 'bigMapSection',
  type: 'object',
  title: 'BigMapSection',
  fields: [
    {
      name: 'isAdded',
      title: 'Show/hide section on the page',
      type: 'boolean',
      initialValue: {
        isAdded: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Add title above the map',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Add image map',
      validation: Rule => Rule.required()
    }
  ]
}