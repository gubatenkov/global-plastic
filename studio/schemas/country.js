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
        name: 'targetSectionCountryPage',
        title: 'Target Section Country Page',
        type: 'targetSection',
      },  
    ],   
  }