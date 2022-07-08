export default {
  name: 'supportSection',
  title: 'Support Section',
  type: 'object',
  fields: [    
    {
      name: 'managingPartner',
      title: 'Managing Partner',
      type: 'array',
      of: [{type: 'partner'}],
    },
    {
      name: 'foundingPartners',
      title: 'Founding Partners',
      type: 'array',
      of: [{type: 'partner'}],
    },
    {
      name: 'sectorLeads',
      title: 'Sector Leads',
      type: 'array',
      of: [{type: 'partner'}],
    },
    {
      name: 'supportningPartner',
      title: 'Supportning Partner',
      type: 'array',
      of: [{type: 'partner'}],
    },
    {
      name: 'environmentalPartner',
      title: 'Environmental Partner',
      type: 'array',
      of: [{type: 'partner'}],
    },
    {
      name: 'innovationPartner',
      title: 'Innovation Partner',
      type: 'array',
      of: [{type: 'partner'}],
    },
  ],
}