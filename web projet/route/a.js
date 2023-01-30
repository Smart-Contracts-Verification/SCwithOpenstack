app.post('/deletevnf', (req, resp) => {
    var body = req.body;
    
  var vnfid =req.body.vnfid;
  
    //try OpenStack
    createtoken.token_POST()
    .then( (token) =>{ 
      
      vnf.GET_VNFD_by_id(token,req.body.vnfid).then((resp0) => {
  
        console.log(resp0)
     
  
      vnf.VNF_DELETE(token,req.body.vnfid)
      
      
      .then((res) => { vnfd.VNFD_DELETE( token,resp0.vnf.vnfd_id)
      
      .then((res) => { console.log(res2); return resp.status(200).json({type: 'success', vnfid:  JSON.stringify(res2.vnf.id ), vnfdid :JSON.stringify(res2.vnf.vnfd_id) });       
  
    
  })})})})
  
  
  
  })