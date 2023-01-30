const vnfd = require('../api_calls_openstack/api_VNFDM_OS.js');
const vnf = require('../api_calls_openstack/api_VNFM_OS.js');
const createtoken = require('../api_calls_openstack/api_CreateToken_OS.js');


const vnfdParametres ={ "vnfd": { "tenant_id": "ba73c2fbf42c4fd0bdf73bdb037ba7e2", "name": "vnfd-sample-0", "description": "Sample", "service_types": [ { "service_type": "vnfd" } ], "attributes": { "vnfd": { "tosca_definitions_version": "tosca_simple_profile_for_nfv_1_0_0", "description": "Demo example", "metadata": { "template_name": "sample-tosca-vnfd" }, "topology_template": { "node_templates": { "VDU1": { "type": "tosca.nodes.nfv.VDU.Tacker", "capabilities": { "nfv_compute": { "properties": { "num_cpus": 2, "mem_size": 5, "disk_size": 5 } } }, "properties": { "image": "cirros-0.5.2-x86_64-disk" } }, "CP1": { "type": "tosca.nodes.nfv.CP.Tacker", "properties": { "order": 0, "management": true, "anti_spoofing_protection": false }, "requirements": [ { "virtualLink": { "node": "VL1" } }, { "virtualBinding": { "node": "VDU1" } } ] }, "VL1": { "type": "tosca.nodes.nfv.VL", "properties": { "vendor": "Tacker", "network_name": "net_mgmt" } } } } } } }}

var vnfdid ;

//createtoken.token_POST().then((token) =>{ vnfd.VNFD_Create(vnfdParametres,token).then((res) =>{console.log(res);vnf.VNF_CREATE(token,res.vnfd.id,'nfv1').then((res) =>console.log(res))})})


var id='c05bad6a-c68b-4be0-bdec-29fe4789c718';

var d_id='69237c95-b826-4f4f-9b93-181d9d17c798';

createtoken.token_POST().then((token) =>{

    vnf.VNF_DELETE(token,id).then((res) =>
     { 
        console.log(res); 
     
        vnfd.VNFD_DELETE( token,d_id).then((res) => 
        
        console.log(res))}
     
     
     )

})

//vnf.VNF_DELETE(token,'262b33b7-cd8e-4f24-a57d-8331abee5526').then((res) =>console.log(res))
//vnfd.VNFD_DELETE('c8c42e77-faa1-4def-9bab-06a516a65048', token).then((res) => console.log(res))


