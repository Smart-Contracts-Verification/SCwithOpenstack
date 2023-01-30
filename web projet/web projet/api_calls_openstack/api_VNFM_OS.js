/******************************************************************************************************************* */
/******************************************* VNF lifecycle ***************************************************************** */


const subject_token= 'gAAAAABjv-mSL9I2kEsEJjl-xbrEOIkdKEPaEk1IgS60kHPUMOUa19QIlAVvSlE8L9qrmMKSAytZmy762qfQbRr_8zUOufZ5c7oShgOY0BJ-v2QVDFJU3qTxEAOG8659gCGU-_SHYf5NEZweltfR75DbDX-5I0JVJKjII9LwdOxzo0MQufg0QWQ'

async function VNF_CREATE(token,VNFDID,vnfname) {
    const vnfParametres =
      {
        "vnf": {
            "tenant_id": "ba73c2fbf42c4fd0bdf73bdb037ba7e2",
            "vnfd_id": VNFDID,
            "vim_id": "7f4ff1d2-af6d-43cd-b172-e3ab4d1451b2",
            "name": vnfname,
            "description": "vnf is created with "+vnfname,
            "attributes": {
                "config": {
                    "vdus": {
                        "vdu1": {
                            "config": {
                                "firewall": "package firewall\n"
                            }
                        }
                    }
                },
                "param_values": {
                    "vdus": {
                        "vdu1": {
                            "param": {
                                "vdu-name": vnfname+"_vdu1"
                            }
                        }
                    }
                }
            },
            "placement_attr": {
                "region_name": "RegionOne"
            }
        }
      }
      const resp = await fetch('http://172.16.252.24:9890/v1.0/vnfs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token' : token
        },
        body: JSON.stringify(vnfParametres)
    })
    return resp.json(); 
    }
    
    async function VNF_UPDATE(token,vnfid) {
      const resp = await fetch('http://172.16.252.24:9890/v1.0/vnfs/'+vnfid,
       {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token' : token
        }
    })
    return resp.json(); 
    }
    
    async function VNF_DELETE(token,vnfid) {
      const resp = await fetch('http://172.16.252.24:9890/v1.0/vnfs/'+vnfid,
       {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token' : token
        }
    })
    return resp.json(); 
    }

    async function GET_VNFS(token) {
      const resp = await fetch('http://172.16.252.24:9890/v1.0/vnfs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token' : token
        }
       
    })
    return resp.json();
      
    }
    
    
    const _id ='72850755-668a-4438-a5d2-0792fbc0b34e'
    const _name ='vnf test 1'
    //VNF_CREATE(subject_token,_id,_name).then((res) =>console.log(res));
    //GET_VNFS(subject_token).then((res) =>console.log(res));
    