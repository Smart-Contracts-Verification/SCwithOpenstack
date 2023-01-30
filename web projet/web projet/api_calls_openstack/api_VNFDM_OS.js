
/******************************************************************************************************************* */
/******************************************* VNFD lifecycle ***************************************************************** */
const subject_token= 'gAAAAABjv-mSL9I2kEsEJjl-xbrEOIkdKEPaEk1IgS60kHPUMOUa19QIlAVvSlE8L9qrmMKSAytZmy762qfQbRr_8zUOufZ5c7oShgOY0BJ-v2QVDFJU3qTxEAOG8659gCGU-_SHYf5NEZweltfR75DbDX-5I0JVJKjII9LwdOxzo0MQufg0QWQ'
const Memory= "512 MB"
const disk= "1 GB"
const vnfdParametres ={ "vnfd": { "tenant_id": "ba73c2fbf42c4fd0bdf73bdb037ba7e2", "name": "vnfd-sample-0.2", "description": "Sample", "service_types": [ { "service_type": "vnfd" } ], "attributes": { "vnfd": { "tosca_definitions_version": "tosca_simple_profile_for_nfv_1_0_0", "description": "Demo example", "metadata": { "template_name": "sample-tosca-vnfd" }, "topology_template": { "node_templates": { "VDU1": { "type": "tosca.nodes.nfv.VDU.Tacker", "capabilities": { "nfv_compute": { "properties": { "num_cpus": 1, "mem_size": Memory, "disk_size": disk } } }, "properties": { "image": "cirros-0.5.2-x86_64-disk" } }, "CP1": { "type": "tosca.nodes.nfv.CP.Tacker", "properties": { "order": 0, "management": true, "anti_spoofing_protection": false }, "requirements": [ { "virtualLink": { "node": "VL1" } }, { "virtualBinding": { "node": "VDU1" } } ] }, "VL1": { "type": "tosca.nodes.nfv.VL", "properties": { "vendor": "Tacker", "network_name": "net_mgmt" } } } } } } }}

const x_subject_token= 'gAAAAABjv-mSL9I2kEsEJjl-xbrEOIkdKEPaEk1IgS60kHPUMOUa19QIlAVvSlE8L9qrmMKSAytZmy762qfQbRr_8zUOufZ5c7oShgOY0BJ-v2QVDFJU3qTxEAOG8659gCGU-_SHYf5NEZweltfR75DbDX-5I0JVJKjII9LwdOxzo0MQufg0QWQ'
async function VNFD_Create(VNFD_Parametres,token) {
  const resp = await fetch('http://172.16.252.24:9890/v1.0/vnfds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token' : token
    },
    body: JSON.stringify(VNFD_Parametres)
})
return resp.json(); 
}

async function VNFD_Update(VNFD_id,token) {
  const uri= 'http://172.16.252.24:9890/v1.0/vnfds/'+VNFD_id
  const resp = await fetch(uri, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token' : token
    },
    body: JSON.stringify(VNFD_Parametres)
})
return resp.json(); 
}

async function VNFD_DELETE(VNFD_id,token) {
  const uri= 'http://172.16.252.24:9890/v1.0/vnfds/'+VNFD_id
  const resp = await fetch(uri, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token' : token
    },
    body: JSON.stringify(VNFD_Parametres)
})
return resp.json(); 
}

async function GET_VNFDS(token) {
  const resp = await fetch('http://172.16.252.24:9890/v1.0/vnfds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token' : token
    }
})
return resp.json();
}

//Create_VNFD_POST(subject_token).then((res) =>console.log(res));
//GET_VNFDS(subject_token).then((res) =>console.log(res));
