const btn4 = document.getElementById("deleteid")
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

var vnfid = parseInt(document.forms["delete"]["vnfid_toDelete"].value);

async function DeleteVNF() {
   const receipt = await contract.methods.Terminate_VNF(vnfid).send( {from: accounts[0], gas: '3000000'},  function(error, resp){
	if(error){
		bcblock.innerHTML +="<br>"+ JSON.stringify("you are not a user, please register before");
		bcblock.innerHTML +="<br>"+ JSON.stringify(error);
		return
	}
})
bcblock.innerHTML +="<br>"+ JSON.stringify(receipt);
      return receipt;
      
  }




async function delete_VNF(){
   
    console.log("delete aaaaa");  
    var data = {"vnfid" : document.forms["delete"]["vnfid_toDelete"].value};
    console.log(data);
    const res = await fetch('http://127.0.0.1:3000/deletevnf', {
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


async function Deleteall() {

	let deleteopenstack= await delete_VNF()
	console.log(deleteopenstack)

    let deleteblockchain= await DeleteVNF()
	console.log(deleteblockchain)
	
}



btn4.onclick=Deleteall;