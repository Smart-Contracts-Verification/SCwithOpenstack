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
    
    
    async function GET_API_version() {
      const subject_token= 'gAAAAABjyq_OS1blwDZpB5TT1ptwWCMb8_nus87_JBLOYlMyh1uP6TJ1KnEhjuP953FSMw3rdHAX8Hq6BzAM6nqs9AGAxtilurMzZ1zyJlIakBjgcOQDxbHlymWhdGIgdUQ8G8g60sENm7eU9H-FV2SLPjOhMx_udi28NpgGFNrsAQhBO0UpX8s'
      const uri= 'http://172.16.252.24:9890/vnflcm/api_versions'
      const resp = await fetch(uri, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token' : subject_token
        }
    })
    console.log(resp.headers)
    return resp.json(); 
    
    }
    
    async function foo(){
        //console.log(token_POST())
      //console.log(GET_API_version())
      const resp = await fetch('./test', {
        method: 'GET'
    })
    }

    async function tokenget(){

      const resp = await fetch('./token', {
        method: 'GET'
    })

    }