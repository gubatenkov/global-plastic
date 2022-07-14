export default {
  name: 'newsSection',
  type: 'object',
  title: '#11 Add news section cards',
  fields: [
    {
      name: 'newsSectionTitle',
      type: 'string',
      title: 'Add news section title'
    },
    {
      name: 'newsSectionLink',
      type: 'url',
      title: 'Add news section "See All" link URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'newsBigCard',
      type: 'object',
      title: 'Add big card text and link',
      fields: [
        {
          name: 'newsBigCardTitle',
          type: 'string',
          title: 'Add big card title'
        },
        {
          name: 'newsBigCardDate',
          type: 'string',
          title: 'Add big card date'
        },
        {
          name: 'newsBigCardLink',
          type: 'url',
          title: 'Add big card link URL'
        },
        {
          name: 'newsBigCardImage',
          type: 'image',
          title: 'Add big card image'
        },
      ]
    },
    {
      name: 'newsSmallCard',
      type: 'object',
      title: 'Add small card text and link',
      fields: [
        {
          name: 'newsSmallCardTitle',
          type: 'string',
          title: 'Add small card title'
        },
        {
          name: 'newsSmallCardDate',
          type: 'string',
          title: 'Add small card date'
        },
        {
          name: 'newsSmallCardLink',
          type: 'url',
          title: 'Add small card link URL'
        },
        {
          name: 'newsSmallCardImage',
          type: 'image',
          title: 'Add small card image'
        },
      ]
    },
    {
      name: 'newsSmall2Card',
      type: 'object',
      title: 'Add 2-nd small card text and link',
      fields: [
        {
          name: 'newsSmallCardTitle',
          type: 'string',
          title: 'Add 2-nd small card title'
        },
        {
          name: 'newsSmallCardDate',
          type: 'string',
          title: 'Add 2-nd small card date'
        },
        {
          name: 'newsSmallCardLink',
          type: 'url',
          title: 'Add 2-nd small card link URL'
        },
        {
          name: 'newsSmallCardImage',
          type: 'image',
          title: 'Add 2-nd small card image'
        },
      ]
    }
  ]
}