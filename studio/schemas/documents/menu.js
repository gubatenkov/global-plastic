export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'pageMenu',
      title: 'Add menu links',
      descriptin: 'will be displayed on all pages on the top and on the bottom of the page',
      type: 'array',
      of : [{
        name: 'headerMenuLink',
        title: 'Add menu link',
        type: 'object',
        fields: [
          {
          name: 'headerMenuLinkText',
          title: 'Add menu link text',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'headerMenuLinkUrl',
          title: 'Add menu link url',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
      }],
      validation: Rule => Rule.required().min(1).max(10)
    }
  ],
  validation: Rule => Rule.required()
}