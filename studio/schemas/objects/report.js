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
      name: 'reportName',
      title: 'Report Name',
      type: 'string',
    },
    {
      name: 'reportFile',
      title: 'Report File',
      type: 'file',
    },   
  ],
}