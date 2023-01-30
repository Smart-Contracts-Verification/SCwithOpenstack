
//const url = 'http://172.16.252.23/identity/v3/auth/tokens?nocatalog';
// const data = { "auth": { "identity": { "methods": ["password"],"password": {"user": {"domain": {"name": "Default"},"name": "admin", "password": "devstack"} } }, "scope": { "project": { "domain": { "name": "Default" }, "name":  "admin" } } }};
/*const vnfd = require('../api_calls_openstack/api_VNFDM_OS.js');
const vnf = require('../api_calls_openstack/api_VNFM_OS.js');
const events = require('../api_calls_openstack/api_EVNET_OS.js');
const createtoken = require('../api_calls_openstack/api_CreateToken_OS.js');
const orchestrator = require('../api_call_SC/Orchestrator.js');
const user = require('../api_call_SC/UserSC.js');*/

//import {Fetch_VNF,Create_VNFSC,createVNF,DeleteVNF,SCALE_OUT_VNF} from '../api_call_SC/Orchestrator.js';

//import { ethers } from "ethers";




var orchetratorabi =[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "Fetch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "c",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "ResourcesAVALIBILities",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "c",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "payment",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "VNF_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "VNFD_ID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_CPU",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Storage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_RAM",
				"type": "uint256"
			}
		],
		"name": "create_VNF",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createVNFcontract_instance",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_CPU",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Storage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_RAM",
				"type": "uint256"
			}
		],
		"name": "FetchVNF",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "amountTopay",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "vnfID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_cpu",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_storage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_memory",
				"type": "uint256"
			}
		],
		"name": "Scale_VNF_out",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_provider",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_factory",
				"type": "address"
			}
		],
		"name": "setaddresscontracts",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "vnfid_old",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vnfid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vnfdid",
				"type": "string"
			}
		],
		"name": "setID",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "vnfID",
				"type": "string"
			}
		],
		"name": "Terminate_VNF",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	}
];


var orchetratorAddress= "0x76Dde4F557828150c67acd686f226c9C5c5fCcef";



async function create_VNF(){

  var account =connectWallet();
  console.log("your account is "+ account[0]);
  var cpu= document.forms["create"]["cpu"].value;
  var memory= document.forms["create"]["memory"].value;
  var storage= document.forms["create"]["storage"].value;
  

  var data = {"cpu" : document.forms["create"]["cpu"].value, "memory" : document.forms["create"]["memory"].value,"storage" : document.forms["create"]["storage"].value};
  console.log("creating VNF contract on blockchain ......");
 
  orchestrator.Create_VNFSC(account[0])
  .then((resp) =>{ 
    console.log("vnf contract is created ......");
     })
     
    console.log(JSON.stringify(data));
    const resp = await fetch('http://127.0.0.1:3000/createvnf', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
}).then((resp) =>{ return resp.json();})
.then(data => {
  document.getElementById("OpenstackEvents").innerHTML += "<br>VNF ID: ";
  document.getElementById("OpenstackEvents").innerHTML += (data.vnfid);
  document.getElementById("OpenstackEvents").innerHTML += "<br>VNFD ID: ";
document.getElementById("OpenstackEvents").innerHTML += (data.vnfdid);
})

orchestrator.createVNF(account[0],data.vnfid,data.vnfdid,cpu,storage,memory);
console.log(" VNF is created ......");
/*console.log(resp);

})
//return resp.json();*/
}


async function scale_VNF(){
    //SCALEVNF(,document.forms["scale"]["cpu"].value, document.forms["scale"]["storage"].value, document.forms["scale"]["memory"].value);

    console.log("scale VNF");  
    var data = {"cpu" : document.forms["scale"]["cpu"].value, "memory" : document.forms["scale"]["memory"].value,"storage" : document.forms["scale"]["storage"].value, "vnfid": document.forms["scale"]["vnfid_toScale"].value};
    console.log(JSON.stringify(data));
    const resp = await fetch('http://127.0.0.1:3000/scalevnf', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then((resp) =>{ return resp.json();})
.then(data => {
  document.getElementById("OpenstackEvents").innerHTML += "<br>Scaling successful ";
  document.getElementById("OpenstackEvents").innerHTML += "<br>VNF ID: ";
  document.getElementById("OpenstackEvents").innerHTML += (data.vnfid);
  document.getElementById("OpenstackEvents").innerHTML += "<br>VNFD ID: ";
document.getElementById("OpenstackEvents").innerHTML += (data.vnfdid);
})

//return resp.json();




}

async function delete_VNF(){
    //DeleteVNF(document.forms["delete"]["vnfid_toDelete"].value)
    console.log("delete");  
    var data = {"vnfid" : document.forms["delete"]["vnfid_toDelete"].value};
    console.log(data);
    const resp = await fetch('http://127.0.0.1:3000/deletevnf', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then((resp) =>{ return resp.json();})
.then(data => {
  document.getElementById("OpenstackEvents").innerHTML += "<br>Deleted ";
  
})

}













         
         
