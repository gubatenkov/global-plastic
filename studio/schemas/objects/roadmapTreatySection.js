export default {
    name: 'roadmapTreatySection',
    title: 'Roadmap Treaty Section',  
    type: 'object',
    fields: [
      {
        name: 'roadmapTreatyTitle',
        title: 'Roadmap Treaty Title',
        type: 'string',
      },
      {
        name: 'roadmapTreatyDescription',
        title: 'Roadmap Treaty Description',
        type: 'string',
      },
      {
        name: 'roadmapTreatyItems',
        title: 'Roadmap Treaty Items',
        type: 'array',
        of: [{type: 'roadmapTreaty'}],
      },
    ],
  }