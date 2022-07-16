export default {
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    {
      name: 'pageSocials',
      title: 'Homepage socials',
      type: 'array',
      of: [
        {
          name: 'pageSocial',
          title: 'Add social',
          type: 'object',
          fields: [
            {
              name: 'pageSocialIcon',
              title: 'Add social icon',
              type: 'image',
              validation: Rule => Rule.required() 
            },
            {
              name: 'pageSocialUrl',
              title: 'Add social url',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'pageSocialAlt',
              title: 'Add social alt text',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1).max(5)
    }
  ],
  validation: Rule => Rule.required()
}