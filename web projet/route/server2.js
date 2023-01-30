var express = require("express");
var request = require('request');
const path = require('path')
const vnfd = require('../api_calls_openstack/api_VNFDM_OS.js');
const vnf = require('../api_calls_openstack/api_VNFM_OS.js');
const events = require('../api_calls_openstack/api_EVNET_OS.js');
const createtoken = require('../api_calls_openstack/api_CreateToken_OS.js');
//const orchestrator = require('../api_call_SC/Orchestrator.js');
//const user = require('../api_call_SC/UserSC.js');



var cors = require('cors')
const bodyParser = require('body-parser');
const { boolean } = require("webidl-conversions");

var app = express();

var metamaskaccount;

var port = 3000;
app.use(bodyParser.json());



app.use(cors())
//Static Pages

app.use('/', express.static(path.join(__dirname, '../public')))
/*
//set views
app.set("views", "./views");
app.set("view engine", "ejs");

//render ejs
app.get("", (req, res) => {
  res.render("index");
});
*/
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});



app.get('/token', (req, res) =>{   
    
    return res.status(200).json({ type: 'success', message: token_POST() });
})



app.get('/apiversion', (req, res) =>{   
    
    return res.status(200).json({ type: 'success', message: GET_API_version() });
})

app.get('/fetchres', (req, res) => {
  return res.status(200).json({ type: 'resources', message: ''});
})

app.get('/fetchvnf', (req, res) => {
  return res.status(200).json({type: 'VNF List',message: ''});
})

app.post('/metamaskid', (req, res) => {
  metamaskaccount = req.body.account;
  console.log(account);
  return res.status(200).json({type: 'success',message: 'ok'});
})

app.get('/events', (req, resp) => {
  createtoken.token_POST().then((token) =>{
  events.GET_openstack_EVNETS(token).then
  ((res2) =>   {console.log(res2); return resp.status(200).json({type: 'success', events:  res2 });       })

})
 // return res.status(200).json({type: 'VNF List',message: ''});
})

// include in body:
// cpu, storage, memory


app.post('/createvnf', (req, resp) => {

 
  const vnfdParametres ={ "vnfd": { "tenant_id": "ba73c2fbf42c4fd0bdf73bdb037ba7e2", "name": "vnfd-" +Math.random(), "description": "Sample", "service_types": [ { "service_type": "vnfd" } ], "attributes": { "vnfd": { "tosca_definitions_version": "tosca_simple_profile_for_nfv_1_0_0", "description": "tosca simple nfv_1_0_0", "metadata": { "template_name": "sample-tosca-vnfd" }, "topology_template": { "node_templates": { "VDU1": { "type": "tosca.nodes.nfv.VDU.Tacker", "capabilities": { "nfv_compute": { "properties": { "num_cpus": req.body.cpu, "mem_size": req.body.memory, "disk_size": req.body.storage } } }, "properties": { "image": "cirros-0.5.2-x86_64-disk" } }, "CP1": { "type": "tosca.nodes.nfv.CP.Tacker", "properties": { "order": 0, "management": true, "anti_spoofing_protection": false }, "requirements": [ { "virtualLink": { "node": "VL1" } }, { "virtualBinding": { "node": "VDU1" } } ] }, "VL1": { "type": "tosca.nodes.nfv.VL", "properties": { "vendor": "Tacker", "network_name": "net_mgmt" } } } } } } }}

console.log('start');
    createtoken.token_POST().then((token) =>{
      console.log('token');
      
       //orchestrator.Create_VNFSC();
      
      vnfd.VNFD_Create(vnfdParametres,token)
      
      .then((res1) =>  {
        console.log('create vnfd openstack');
        
        console.log(res1);vnf.VNF_CREATE(token,res1.vnfd.id,'nfv1'+Math.random())

    .then((res2) =>   {
      console.log('create vnf openstack');
      console.log(res2); 
      //orchestrator.createVNF(res2.vnf.id,res2.vnf.vnfd_id,req.body.cpu,req.body.storage,req.body.memory); 
      //orchestrator.createVNF(res2.vnf.id,res2.vnf.vnfd_id,req.body.cpu,req.body.storage,req.body.memory); 
      console.log('create SC BC');
      //.then((res0) => {orchestrator.createVNF(res2.vnf.id,res2.vnf.vnfd_id,req.body.cpu,req.body.storage,req.body.memory);  })

      return resp.status(200).json({type: 'success', vnfid:  JSON.stringify(res2.vnf.id ), vnfdid :JSON.stringify(res2.vnf.vnfd_id) });
      
      
      
            }
    
    
    )}
    
    ) } )


    })  
      /*if(status){
        return res.status(200).json({type: 'success', message:  JSON.stringify(response)})

      } else {return res.status(500).json({type: 'error', message: 'OpenStack'});}*/
    


// include in body:
// vnfid, cpu, storage, memory

app.post('/scalevnf', (req, resp) => {
  var body = req.body;
  const vnfdParametres ={ "vnfd": { "tenant_id": "ba73c2fbf42c4fd0bdf73bdb037ba7e2", "name": "vnfd-" +Math.random(), "description": "Sample", "service_types": [ { "service_type": "vnfd" } ], "attributes": { "vnfd": { "tosca_definitions_version": "tosca_simple_profile_for_nfv_1_0_0", "description": "tosca simple nfv_1_0_0", "metadata": { "template_name": "sample-tosca-vnfd" }, "topology_template": { "node_templates": { "VDU1": { "type": "tosca.nodes.nfv.VDU.Tacker", "capabilities": { "nfv_compute": { "properties": { "num_cpus": req.body.cpu, "mem_size": req.body.memory, "disk_size": req.body.storage } } }, "properties": { "image": "cirros-0.5.2-x86_64-disk" } }, "CP1": { "type": "tosca.nodes.nfv.CP.Tacker", "properties": { "order": 0, "management": true, "anti_spoofing_protection": false }, "requirements": [ { "virtualLink": { "node": "VL1" } }, { "virtualBinding": { "node": "VDU1" } } ] }, "VL1": { "type": "tosca.nodes.nfv.VL", "properties": { "vendor": "Tacker", "network_name": "net_mgmt" } } } } } } }}


  //try OpenStack
  createtoken.token_POST()
  .then( (token) =>{ 
    
    vnf.GET_VNFD_by_id(token,req.body.vnfid).then((resp0) => {

      console.log(resp0)
   

    vnf.VNF_DELETE(token,req.body.vnfid)
    
    
    .then((res) => { vnfd.VNFD_DELETE( token,resp0.vnf.vnfd_id)
    
    .then((res) => {  
  
        vnfd.VNFD_Create(vnfdParametres,token) 
        .then((res) =>{vnf.VNF_CREATE(token,res.vnfd.id,'nfv1'+Math.random())
        .then((res2) =>   {console.log(res2); return resp.status(200).json({type: 'success', vnfid:  JSON.stringify(res2.vnf.id ), vnfdid :JSON.stringify(res2.vnf.vnfd_id) });       

  
})})})})



})})})
        
       


/*app.post('/deletevnf', (req, resp) => {
  // var body = req.body;

  console.log('delete server 2')
  console.log(req.body.vnfid)
  createtoken.token_POST()
  .then((token) =>{

    vnf.GET_VNFD_by_id(token,req.body.vnfid).then((resp0) => {

       console.log(resp0); 
    vnf.VNF_DELETE(token,req.body.vnfid).then((res1) =>{ 
       // console.log(res1); 
        //console.log(resp0); 
        vnfd.VNFD_DELETE( token, resp0.vnf.vnfd_id).then((res) => { 
          
          return resp.status(200).json({message: 'ok'});})
      })
    })
})
  
})*/



app.post('/deletevnf', (req, resp) => {
  var body = req.body;
  
var vnfid =req.body.vnfid;

  //try OpenStack
  createtoken.token_POST()
  .then( (token) =>{ 
    
    vnf.GET_VNFD_by_id(token,req.body.vnfid).then((resp0) => {

      console.log(resp0)
   

    vnf.VNF_DELETE(token,req.body.vnfid)
    
    
    .then((resp1) => { vnfd.VNFD_DELETE( token,resp0.vnf.vnfd_id)
    
    .then((resp2) => { console.log(resp2); return resp.status(200).json({type: 'success', message :'ok' });       

  
})})})})



})


app.get('/openstackevents', (req, res) => {
  return res.status(200).json({type: 'OpneStack events', message: GET_openstack_EVNETS()});
})

app.get('/blockchainevents', (req, res) => {
  return res.status(200).json({type:'BlockChain events', message: ''});
})

//Listne to port 3000
app.listen(port, () => console.info(`Listning to port ${port}`));


//////////////////////////////////////////////////////



 