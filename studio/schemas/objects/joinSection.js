export default {
  name: 'joinSection',
  type: 'object',
  title: '#12 Add Joint to Us section info',
  fields: [
    {
      name: 'joinSectionTitle',
      type: 'string',
      title: 'Add section title',
    },
    {
      name: 'joinSectionSubtitle',
      type: 'text',
      title: 'Add section text under title',
    },
    {
      name: 'joinSectionImage',
      type: 'image',
      title: 'Add section image',
    },
    {
      name: 'joinSectionListTitle',
      type: 'string',
      title: 'Add join section list title',
    },
    {
      name: 'joinSectionList',
      type: 'array',
      title: 'Add join section list items',
      of: [
        {
          name: 'joinSectionListItem',
          type: 'string'
        }
      ]
    },
    {
      name: 'joinSectionCTAText',
      type: 'string',
      title: 'Add section CTA text',
    },
    {
      name: 'joinSectionLink',
      type: 'object',
      title: 'Add section CTA link text and URL',
      fields: [
        {
          name: 'joinSectionLinkText',
          type: 'string'
        },
        {
          name: 'joinSectionLinkURL',
          type: 'string'
        }
      ]
    },
    {
      name: 'joinSectionTextUnderLink',
      type: 'text',
      title: 'Add text under CTA link'
    }
  ]
}