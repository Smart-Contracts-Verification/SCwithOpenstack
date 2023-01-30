
  const UserID= document.getElementById('UserID');
  const UserAddress1= document.getElementById('UserAddress');
  const bcblock=  document.getElementById("BlockchainEvents");


var useraddress= "0x5590F18D265cBA6b4aB471eFFA41604917C7650E";
var userabi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "UserAdd",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "UserID",
				"type": "uint256"
			}
		],
		"name": "register_User",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "UserAdd",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "UserID",
				"type": "uint256"
			}
		],
		"name": "unregister_User",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "Registeruser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idpr",
				"type": "uint256"
			}
		],
		"name": "unRegisteruser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_u",
				"type": "address"
			}
		],
		"name": "Isuser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "a",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "add",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "registered",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const web3 = new Web3(window.ethereum);
var  contract_user= new web3.eth.Contract(userabi, useraddress);

 async function userevent(){

 
const event =  await contract_user.getPastEvents('register_User', {fromBlock:'latest', toBlock: 'latest'}, function(error, events){

  bcblock.innerHTML +="<br>" + "User Address: " + events[0].returnValues.UserAdd;
  bcblock.innerHTML +="<br>" + "User ID: " +events[0].returnValues.UserID;
const a = events[0].returnValues.UserAdd;
const b =events[0].returnValues.UserID;
localStorage.setItem ("Address",JSON.stringify( a));
localStorage.setItem ("ID",JSON.stringify(b));
 bcblock.innerHTML +="<br>"+ "Transaction details: ";
 bcblock.innerHTML +="<br>"+ JSON.stringify(events[0]);


 
 UserAddress1.innerHTML +=  localStorage.getItem("Address");
 UserID.innerHTML +=  localStorage.getItem("ID");

 if(error){
  bcblock.innerHTML +="<br>"+ JSON.stringify(error);
 }

 })
 

}


 userevent();


