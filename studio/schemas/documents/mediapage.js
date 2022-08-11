export default {
  name: 'mediapage',
  type: 'document',
  title: 'Mediapage',
  fields: [
    {
      name: 'pageMeta',
      type: 'meta'
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Page sections',
      options: {
        sortable: false
      },
      of: [
        { type: 'mediaHeroSection' },
        { type: 'updatesSliderSection' },
        { type: 'mediaVideoSection' },
        { type: 'reportsSliderSection' },
        { type: 'moreNewsSection' },
        { type: 'buildingProgramsSection' },
        { type: 'linksSection' },
        { type: 'dialogsSection' },
        { type: 'bigMapSection' },
      ],
    },
  ],
}