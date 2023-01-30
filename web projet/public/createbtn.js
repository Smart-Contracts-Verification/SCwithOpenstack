
const createvnf = document.getElementById("createid")
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


var cpu= document.forms["create"]["cpu"].value;
var memory= document.forms["create"]["memory"].value;
var storage= document.forms["create"]["storage"].value;

async function createVNFSC() { 

  var receipt = await contract.methods.createVNFcontract_instance().send( {from: accounts[0], gas: '3000000' } ,  function(error, resp){
	if(error){
		bcblock.innerHTML +="<br>"+ JSON.stringify("you are not a user, please register before");
		bcblock.innerHTML +="<br>"+ JSON.stringify(error);
		return
	}
})
  // bcblock.innerHTML += JSON.stringify(receipt);
   return receipt;
   
}


async function openstackcreate() {

  var data = {"cpu" : document.forms["create"]["cpu"].value, "memory" : document.forms["create"]["memory"].value,"storage" : document.forms["create"]["storage"].value};
  //create a specific smart contract on blockchain  from vnf factory contract
  let   SC_new= await createVNFSC();
  console.log(SC_new);


  let  receipt0  = await contract.methods.FetchVNF(cpu,memory,storage).send({ from: accounts[0]} ,  function(error, resp){
	if(error){
		bcblock.innerHTML +="<br>"+ JSON.stringify("you are not a user, please register before");
		bcblock.innerHTML +="<br>"+ JSON.stringify(error);
		return
	}})
	let amount = receipt0.events.Fetch.returnValues.b;

var receipt = await contract.methods.create_VNF('data.vnfid','data.vnfdid',cpu,storage,memory).send( {from: accounts[0], gas: '3000000', value:amount },  function(error, resp){
	if(error){
		bcblock.innerHTML +="<br>"+ JSON.stringify("you are not a user, please register before");
		bcblock.innerHTML +="<br>"+ JSON.stringify(error);
		return
	}
})
console.log(receipt);

bcblock.innerHTML += "<br>"+JSON.stringify( "the amount is :"+ receipt.events.Fetch.returnValues.b);
bcblock.innerHTML += "<br>"+JSON.stringify( "the payment status is :"+ receipt.events.payment.returnValues.text);
bcblock.innerHTML += "<br>"+JSON.stringify( "transaction details :"+ JSON.stringify(receipt));
 

const res = await fetch('http://127.0.0.1:3000/createvnf', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
}).then((resp) =>{console.log(resp) ;return resp.json(); })
.then(async (data) =>   {
const receipt1 = await contract.methods.setID('data.vnfid',data.vnfid, data.vnfdid).send( {from: accounts[0], gas: '1000000'},  function(error, resp){
	if(error){
		bcblock.innerHTML +="<br>"+ JSON.stringify("you are not a user, please register before");
		bcblock.innerHTML +="<br>"+ JSON.stringify(error);
		return
	}
})
document.getElementById("OpenstackEvents").innerHTML += "<br>VNF ID: ";
document.getElementById("OpenstackEvents").innerHTML += (data.vnfid);
document.getElementById("OpenstackEvents").innerHTML += "<br>VNFD ID: ";
document.getElementById("OpenstackEvents").innerHTML += (data.vnfdid);
document.getElementById("scaleid").disabled = true;
document.getElementById("deleteid").disabled = true;
setTimeout(() => {  document.getElementById("scaleid").disabled = false; }, 15000);
setTimeout(() => {  document.getElementById("scaleid").disabled = false; }, 15000);
})


}





/*const createVNF1 = async () => { 

          let   SC_new= await createVNFSC();

            console.log(SC_new);

          let openstack= await openstackcreate();
      
        console.log(openstack);
    //var receipt = await await contract.methods.create_VNF(openstack.vnfid,openstack.vnfdid,cpu,storage,memory).send( {from: accounts[0], gas: '3000000', value : '1500000000000000000' });

    //bcblock.innerHTML += JSON.stringify(receipt);
      
      
    

  }*/


      

createvnf.onclick=openstackcreate;