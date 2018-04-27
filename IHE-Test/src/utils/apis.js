let baseUrl = '/apis'
if (process.env.NODE_ENV === 'development') {
  baseUrl = ''
}

const apis = {
  source:{
    sendDoc:`${baseUrl}/source/sendDoc`,
    sendFolder:`${baseUrl}/source/sendFolder`,
    sendDocToFolder:`${baseUrl}/source/sendDocToFolder`,
    docApndRplcXfrm:`${baseUrl}/source/docApndRplcXfrm`,
   },
 consumer:{
  queryDoc: `${baseUrl}/consumer/queryDoc`,
  querySubmissionSet: `${baseUrl}/consumer/querySubmissionSet`,
  queryFolder: `${baseUrl}/consumer/queryFolder`,
  getAll: `${baseUrl}/consumer/getAll`,
  getDocuments: `${baseUrl}/consumer/getDocuments`,
  getAssociations: `${baseUrl}/consumer/getAssociations`,
  getFolderAndContents: `${baseUrl}/consumer/getFolderAndContents`,
  retrieveDocument: `${baseUrl}/consumer/retrieveDocument`,
  getRelatedDocument: `${baseUrl}/consumer/getRelatedDocument`,

 },
 systemConfig:{
  addAndUpdate: `${baseUrl}/systemConfig/addAndUpdate`,
  delete: `${baseUrl}/systemConfig/delete`,
  queryOne: `${baseUrl}/systemConfig/queryOne`,
  queryAll: `${baseUrl}/systemConfig/queryAll`,
 }
}

export default apis