export default {
  name: 'mediapage',
  type: 'document',
  title: 'Mediapage',
  fields: [
    {
      name: 'pageTitle',
      title: 'Mediapage SEO title',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(100)
    },
    {
      name: 'pageDescription',
      title: 'Mediapage SEO description',
      type: 'text',
      validation: Rule => Rule.required().min(1).max(300)
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'mediaHeroSection' },
        { type: 'updatesSliderSection' },
        { type: 'reportsSliderSection' },
        { type: 'linksSection' },
        { type: 'dialogsSection' },
      ],
    },
  ],
}