export default {
    name: 'country',
    title: 'Country',
    type: 'document',
    fields: [
      {
        name: 'countryHero',
        title: 'Country Hero',
        type: 'countryHeroSection',
      },
      {
        name: 'upcomingActivationsSlider',
        title: 'Upcoming Activations Slider',
        type: 'array',
        of: [{type: 'upcomingActivationsCard'}],
      },
      {
        name: 'stakeholderParticipation',
        title: 'Stakeholder Participation',
        type: 'stakeholderParticipationSection',
      },
      {
        name: 'stakeholderEngagement',
        title: 'Stakeholder Engagement',
        type: 'stakeholderEngagementSection',
      },
      {
        name: 'ecoSentiment',
        title: 'Eco Sentiment',
        type: 'number',
      },
      {
        name: 'localInsights',
        title: 'Local Insights',
        type: 'localInsightsSection',
      },
      {
        name: 'wasteSector',
        title: 'Waste Sector',
        type: 'wasteSection',
      },
      {
        name: 'videoQuoteSlider',
        title: 'Video Quote Slider',
        type: 'array',
        of: [{type: 'videoSection'}],
      },      
      {
        name: 'targetSectionCountryPage',
        title: 'Target Section Country Page',
        type: 'targetSection',
      },
      {
        name: 'crossSectorSupport',
        title: 'Cross-Sector Support',
        type: 'supportSection',
      },
      {
        name: 'reportsGuidesSlider',
        title: 'Reports Guides Slider',
        type: 'array',
        of: [{type: 'report'}],
      },
      {
        name: 'actionSlider',
        title: 'Action Slider',
        type: 'array',
        of: [{type: 'action'}],
      },
      {
        name: 'archiveSlider',
        title: 'Archive Slider',
        type: 'array',
        of: [{type: 'archiveSection'}],
      }, 
    ],   
  }