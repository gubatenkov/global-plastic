export default {
  name: 'missionHeroSection',
  type: 'object',
  title: 'Add Mission hero section',
  fields: [
    {
      name: 'suptitle',
      type: 'string',
      title: 'Add text above the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Add section title',
      validation: Rule => Rule.required()
    },
    {
      name: 'panelBoldText',
      title: 'Add bold text on the section panel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'panelText',
      title: 'Add text on the section panel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'panelLinkUrl',
      title: 'Add link Url on the section panel',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ]
}