/******************************************************************************************************************* */
/******************************************* API version in OPENSTACK ***************************************************************** */


async function GET_API_version() {
  const subject_token= 'gAAAAABjyUaWdrWhodmNW009TePzOuxJnSp5l3aEzGAHalWQ-py5MHhQltYuZp1dD23lv0Fe_4IkJAjREM-CFjHH58Y4H1ZYgGVHXkCjnzqVAnRGYVnVMukrFYzXtxtrzDM1-1kd3q6R9f3ddk973pTNFyCAEjNJBjRxQ-rTo99FWiYgMUyXdQs'
  const uri= 'http://172.16.252.23:9890/vnflcm/api_versions'
  const resp = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token' : subject_token
    }
})
console.log(resp)
return resp.json(); 

}
GET_API_version().then((res) =>console.log(res));