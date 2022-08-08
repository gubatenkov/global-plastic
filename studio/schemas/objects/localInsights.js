export default {
    name: 'localInsightsSection',
    title: 'Local Insights Section',  
    type: 'object',
    fields: [
      {
        name: 'isAdded',
        title: 'Hide/show section on the page',
        type: 'boolean',
        initialValue: {
          isAdded: true,
        },
      },
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
        name: 'localInsightsDiagramTitle',
        title: 'Local Insights Diagram Title',
        type: 'string',
      },
      {
        name: 'levelUrgencyDiagramData',
        title: 'Level Urgency Diagram Data',
        type: 'number',
      },
      {
        name: 'localInsightsDiagramDescription',
        title: 'Local Insights Diagram Description',
        type: 'string',
      },    
    ],
  }