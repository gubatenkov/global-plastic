export default {
    name: 'localInsightsSection',
    title: 'Local Insights Section',  
    type: 'object',
    fields: [
      {
        name: 'localInsightsTitle',
        title: 'Local Insights Title',
        type: 'string',
      },
      {
        name: 'localInsightsDescription',
        title: 'Local Insights Description',
        type: 'string',
      },
      {
        name: 'localInsightsImage',
        title: 'Local Insights Image',
        type: 'image',
      },
      {
        name: 'levelUrgency',
        title: 'Level Urgency',
        type: 'number',
      },     
    ],
  }