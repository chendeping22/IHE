const config={
  url:'/apis'
}
const urlName={
  document:{
    sendDocument:'/xdsb/sendDocument',
    sendFolder:'',
    sendFolderDocumnet:''
  },
  servicelist: {
    get: '/servicelist/get',
    post: '/servicelist/post',
    put: '/servicelist/put',
    delete: '/servicelist/delete',
  }
}
export{
  config,
  urlName
}
