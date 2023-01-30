const btn3 = document.getElementById("scaleid")
const bcblock=  document.getElementById("BlockchainEvents");

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


var orchetratorAddress= "0x15174f3E1b9DD5f8abeE2aB9634a0F5534E73C6e";
const web3 = new Web3(window.ethereum);
var  contract= new web3.eth.Contract(orchetratorabi, orchetratorAddress);
const accounts= await  ethereum.request({ method: 'eth_requestAccounts' });


var vnfid = parseInt(document.forms["scale"]["vnfid"].value);
var cpu_value = parseInt(document.forms["scale"]["cpu"].value);
var memory_value = parseInt(document.forms["scale"]["memory"].value);
var storage_value = parseInt(document.forms["scale"]["storage"].value);


async function SCALEVNF() {

	let  receipt0  = await contract.methods.FetchVNF(cpu_value,memory_value,storage_value).send({ from: accounts[0]} ,  function(error, resp){
		if(error){
			bcblock.innerHTML +="<br>"+ JSON.stringify("you are not a user, please register before");
			bcblock.innerHTML +="<br>"+ JSON.stringify(error);
			return
		}})
		let amount = receipt0.events.Fetch.returnValues.b;


const receipt = await contract.methods.Scale_VNF_out(vnfid, cpu_value, memory_value, storage_value).send( {from: accounts[0], gas: '1000000', value :amount },  function(error, resp){
	if(error){
		bcblock.innerHTML +="<br>"+ JSON.stringify("you are not a user, please register before");
		bcblock.innerHTML +="<br>"+ JSON.stringify(error);
		return
	}})
      bcblock.innerHTML += "<br>Scaling successful "; 
	  bcblock.innerHTML += "<br>Old VNF ID: " +(vnfid);
	  bcblock.innerHTML +="<br>"+ JSON.stringify(receipt);
	  return receipt;
  }



async function openstackscale(){

    console.log("scale VNF");  
    var data = {"cpu" : document.forms["scale"]["cpu"].value, "memory" : document.forms["scale"]["memory"].value,"storage" : document.forms["scale"]["storage"].value, "vnfid": document.forms["scale"]["vnfid"].value};
   
    const resp = await fetch('http://127.0.0.1:3000/scalevnf', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then((resp) =>{ return resp.json();})
.then( async (data) => {
const receipt1 = await contract.methods.setID(vnfid,data.vnfid, data.vnfdid).send( {from: accounts[0], gas: '1000000'},  function(error, resp){
	if(error){
		bcblock.innerHTML +="<br>"+ JSON.stringify("you are not a user, please register before");
		bcblock.innerHTML +="<br>"+ JSON.stringify(error);
		return
	}})
 
bcblock.innerHTML += "<br>New VNF ID: " +(data.vnfid);
bcblock.innerHTML += "<br>New VNFD ID: "+(data.vnfdid);

	document.getElementById("OpenstackEvents").innerHTML += "<br>Scaling successful "; 
    document.getElementById("OpenstackEvents").innerHTML += "<br>New VNF ID: " +(data.vnfid);
    document.getElementById("OpenstackEvents").innerHTML += "<br>New VNFD ID: "+(data.vnfdid);

})

}


async function scale() {

	let Scaleblockchain= await SCALEVNF()
	console.log(Scaleblockchain)


	let Scaleopenstack= await openstackscale()
	//console.log(Scaleopenstack)



}



btn3.onclick=scale;
