export default {
  name: 'mission',
  type: 'document',
  title: 'Mission',
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
        { type: 'missionHeroSection' },
        { type: 'missionCTASection' },
        { type: 'textImgMissionSection' },
        { type: 'missionCardsSection' },
        { type: 'bigMapSection' },
      ],
    },
  ],
}