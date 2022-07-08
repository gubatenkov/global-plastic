export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      name: 'pageTitle',
      title: 'Homepage SEO title',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(100)
    },
    {
      name: 'pageDescription',
      title: 'Homepage SEO description',
      type: 'text',
      validation: Rule => Rule.required().min(1).max(300)
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'heroSection' },
        { type: 'sliderSection' },
      ],
    },
  ],
}