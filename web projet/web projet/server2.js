var express = require("express");
var request = require('request');
const path = require('path')

var app = express();

var port = 3000;



//var API = 'http://172.16.252.24:9890/vnflcm/api_versions'

//Static Pages
app.use('/', express.static(path.join(__dirname, './public')))

//set views
app.set("views", "./views");
app.set("view engine", "ejs");

//render ejs
app.get("", (req, res) => {
  res.render("index");
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/page2', (req, res) => {
  let email = req.query.email;
  let Url = 'http://172.16.252.24:9890/vnflcm/api_versions'

  request(
    { url: Url },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/token', (req, res) =>{   
    
    return res.status(200).json({ type: 'success', message: token_POST() });
})



app.get('/test', (req, res) =>{   
    
    return res.status(200).json({ type: 'success', message: GET_API_version() });
})


//Listne to port 3000
app.listen(port, () => console.info(`Listning to port ${port}`));


//////////////////////////////////////////////////////
async function GET_API_version() {
    const subject_token= 'gAAAAABjysJf2PbDr2URd3SoeBceP5IjlQan1VnTRj2-4CHyaH_pEccFudZXi2wQM84YsOjvaqJeMHgb32yc-uU8Iq-5NpVg9QlESLhvxdWzPl6-5asziwiFIG1DERAsrlcJlal7v4sV1oni27fsLwh5vd1UIVpdVlE9U_jpaEJuCnFbdVG_xJw'
    const uri= 'http://172.16.252.24:9890/vnflcm/api_versions'
    const resp = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token' : subject_token
      }
  })
  //console.log(resp.json())
  return resp.json(); 
  
  }
  
  /*function foo(){

    GET_API_version().then((res) => response = res);
      //console.log(token_POST())
      //GET_API_version()
    //console.log(GET_API_version())
  }*/
  ///////////////////////////////////////////////////////////////




  //////////////
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
  console.log(a)
    return  a
  }


  //////////