/******************************************************************************************************************* */
/******************************************* VNF lifecycle ***************************************************************** */


const subject_token= 'gAAAAABjv-mSL9I2kEsEJjl-xbrEOIkdKEPaEk1IgS60kHPUMOUa19QIlAVvSlE8L9qrmMKSAytZmy762qfQbRr_8zUOufZ5c7oShgOY0BJ-v2QVDFJU3qTxEAOG8659gCGU-_SHYf5NEZweltfR75DbDX-5I0JVJKjII9LwdOxzo0MQufg0QWQ'

async function VNF_CREATE(token,VNFDID,vnfname) {
    const vnfParametres =
      {
        "vnf": {
            "tenant_id": "ba73c2fbf42c4fd0bdf73bdb037ba7e2",
            "vnfd_id": VNFDID,
            "vim_id": "0f331b38-18fd-4a03-9365-8a040f8e6807",
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
    
    /*.then((resp) =>{ console.log(resp);return resp.json()})
    //return resp.json(); 
    const returnResp = () =>{resp.then((a) => {return a})};
    returnResp; */
    }

    //VNF_CREATE('gAAAAABjz-WXLUrU0R6PNKAx0NiPuTr-YVCWXpYM0sM7AmMOP1Nkea2wM_fYt2Stc8HvWXiNjoyGzT5fv9gEFXO8bM2hA2Thq1IWiaNWQA_S37BCrpsdNpQMqTS8qeUR8JdfJpKM_T-hiLBo78NmuaCqIMazGZ89oQLxCDn3qMPPeJpnm9kCrW8','13fc351f-7062-491c-a292-5d01e78d753c',"vnfffff").then((res) =>console.log(res));
    
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
    return resp;
    
    }

    async function GET_VNFD_by_id(token, vnfid) {
      const resp = await fetch('http://172.16.252.24:9890/v1.0/vnfs/'+vnfid, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token' : token
        }
       
    })
    // return resp.json();
     return resp.json();  
    }
    
    
    const _id ='72850755-668a-4438-a5d2-0792fbc0b34e'
    const _name ='vnf test 1'
    //const id =
    //VNF_CREATE(subject_token,_id,_name).then((res) =>console.log(res));
    //GET_VNFS(subject_token).then((res) =>console.log(res));
   // VNF_UPDATE(subject_token).then((res) =>console.log(res));
   module.exports = {VNF_CREATE, VNF_DELETE, GET_VNFD_by_id};

   //GET_VNFD_by_id('gAAAAABj0_WwFt1YG7X30OEAku6h6rLyF6mU38h1-6gM-5r7slugVVfBU1UmeLVm0sZqnhHoTtdwAbPvB9E1-gUjuei53pIsjb055udfvQ7-57SkILhjpkfxI-M_3E47f2q9S_kV8wZkTwrb3rORevlSzgGzpS5G8y1ULzxSEuRJqwP-jkB9qWE','67739869-56ab-42f3-baab-4f17fc742bd8').then((res) => console.log(res))
   //VNF_DELETE('gAAAAABj0_WwFt1YG7X30OEAku6h6rLyF6mU38h1-6gM-5r7slugVVfBU1UmeLVm0sZqnhHoTtdwAbPvB9E1-gUjuei53pIsjb055udfvQ7-57SkILhjpkfxI-M_3E47f2q9S_kV8wZkTwrb3rORevlSzgGzpS5G8y1ULzxSEuRJqwP-jkB9qWE','1646329e-029a-479a-aa61-cf6b191ffee9').then((res) => console.log(res))