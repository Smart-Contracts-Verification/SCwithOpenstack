//const registerUbtn = document.getElementById("btn1")
const bcblock=  document.getElementById("BlockchainEvents");
const unregisterUbtn = document.getElementById("unregisterUser")

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

var useraddress= "0x5590F18D265cBA6b4aB471eFFA41604917C7650E";



/*async function registerUSER() 
 {
    const receipt = await contract_user.methods.Registeruser().send( {from: accounts[0], gas: '1000000'});
    
	bcblock.innerHTML +="<br>" + "Your address is registred";
	bcblock.innerHTML +="<br>" + "User Address: " +receipt.events.register_User.returnValues.UserAdd;
	bcblock.innerHTML +="<br>" + "User ID: " +receipt.events.register_User.returnValues.UserID;
	bcblock.innerHTML +="<br>"+ "Transaction details: ";
	bcblock.innerHTML +="<br>"+ JSON.stringify(receipt);


}*/

async function unregisterUSER()  {
	const web3 = new Web3(window.ethereum);
var  contract_user= new web3.eth.Contract(userabi, useraddress);
const accounts= await  ethereum.request({ method: 'eth_requestAccounts' });

	let  id= localStorage.getItem("ID");
	id = Number(id.substring(1,id.length-1));
	console.log(id);
	// add variable ID , take it from ID user in top of the page
    const receipt = await contract_user.methods.unRegisteruser(id).send( {from: accounts[0], gas: '1000000'},  function(error, resp){
	 if(error){
		bcblock.innerHTML +="<br>"+ JSON.stringify(receipt);
		return
	}

	
	console.log(resp);
	
	})
	bcblock.innerHTML +="<br>" + "Your address is unregistred";
	bcblock.innerHTML +="<br>" + "User Address: " +receipt.events.unregister_User.returnValues.UserAdd;
	bcblock.innerHTML +="<br>" + "User ID: " +receipt.events.unregister_User.returnValues.UserID;
	bcblock.innerHTML +="<br>"+ "Transaction details: ";
	bcblock.innerHTML +="<br>"+ JSON.stringify(receipt);
}





	//registerUbtn.onclick=registerUSER;
	unregisterUbtn.onclick=unregisterUSER;


