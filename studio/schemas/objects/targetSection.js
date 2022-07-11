export default {
    name: 'targetSection',
    title: 'Target Section',  
    type: 'object',
    fields: [    
      {
        name: 'tectionImg',
        title: 'Target Section Image',
        type: 'image',
      }, 
      {
        name: 'tectionTitle',
        title: 'Target Section Title',
        type: 'string',
      },
      {
        name: 'tectionSuptitle',
        title: 'Target Section Sub Title',
        type: 'string',
      },
      {
        name: 'tectionText',
        title: 'Target Section Description',
        type: 'string',
      },
      {
        name: 'tectionLink',
        title: 'Target Section Link',
        type: 'object',
        fields: [
          {
            name: 'tectionLinkURL',
            type: 'string',
            title: 'Target Section Link URL'
          },
          {
            name: 'tectionLinkText',
            type: 'string',
            title: 'Target Section Link Text'
          },
        ]
      },
    ],
  }

