/******************************************************************************************************************* */
/******************************************* Authentication VIA TOKEN ***************************************************************** */

 async function token_POST() {

  const url = 'http://172.16.252.24/identity/v3/auth/tokens?nocatalog';
const data1 = { "auth": { "identity": { "methods": ["password"],"password": {"user": {"domain": {"name": "Default"},"name": "admin", "password": "devstack"} } }, "scope": { "project": { "domain": { "name": "Default" }, "name":  "admin" } } }};

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body: JSON.stringify(data1)  
  })
  const json = await resp.json();
  const a =resp.headers.get('x-subject-token')

  return  a
}


module.exports = {token_POST};
//token_POST().then((res) => console.log(res));




