export default {
  name: 'report',
  title: 'Report',
  type: 'object',
  fields: [
    {
      name: 'reportImage',
      title: 'Report Image',
      type: 'image',
    },
    {
      name: 'reportTitle',
      title: 'Report Title',
      type: 'string',
    },
    {
      name: 'reportSubTitle',
      title: 'Report Sub Title',
      type: 'string',
    },
    {
      name: 'reportRegion',
      title: 'Report Region',
      type: 'string',
    },
    {
      name: 'reportCountry',
      title: 'Report Country',
      type: 'string',
    },
    {
      name: 'reportFile',
      title: 'Report File',
      type: 'file',
    },   
  ],
}