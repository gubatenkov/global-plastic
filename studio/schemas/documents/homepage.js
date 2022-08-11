export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
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
        { type: 'heroSection' },
        { type: 'sliderSection' },
        { type: 'cardSection' },
        { type: 'wideSliderSection' },
        { type: 'tectionSection' },
        { type: 'sponsorsSection' },
        { type: 'regionsSection' },
        { type: 'videoSection' },
        { type: 'linksSection' },
        { type: 'stakeholdersSection' },
        { type: 'newsSection' },
        { type: 'joinSection' },
        { type: 'partnersSection' },
        { type: 'dialogsSection' },
        { type: 'bigMapSection' },
      ],
    },
  ],
}