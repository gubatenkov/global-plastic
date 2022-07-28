export default {
    name: 'roadmap',
    title: 'Roadmap',
    type: 'document',
    fields: [
      {
        name: 'pageTitle',
        title: 'Roadmap Page SEO title',
        type: 'string',
        validation: Rule => Rule.required().min(1).max(100)
      },
      {
        name: 'pageDescription',
        title: 'Roadmap Page SEO description',
        type: 'text',
        validation: Rule => Rule.required().min(1).max(300)
      },
      {
        name: 'roadmapHeroSection',
        title: 'Roadmap Hero Section',
        type: 'array',
        of: [{type: 'roadmapHero'}],
      },
      {
        name: 'roadmapUpcomingActivations',
        title: 'Roadmap Upcoming Activations',
        type: 'array',
        of: [{type: 'roadmapUpcomingActivationsCard'}],
      },
      {
        name: 'roadmapTargetSection',
        title: 'Roadmap Target Section',
        type: 'targetSection',
      },
      {
        name: 'roadmapArchiveSection',
        title: 'Roadmap Archive Section',
        type: 'array',
        of: [{type: 'archiveSection'}],
      },    
    ],   
  }