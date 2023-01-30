  const loginbuttom= document.getElementById('loginbuttom');
  //const UserID= document.getElementById('UserID');
  //const UserAddress= document.getElementById('UserAddress');

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
  ]
  
  var useraddress= "0x5590F18D265cBA6b4aB471eFFA41604917C7650E";


async function adduser() {
    
 try {
  console.log("start");
    const web3 = new Web3(window.ethereum);
    var  contract_user= new web3.eth.Contract(userabi, useraddress);
    const accounts= await  ethereum.request({ method: 'eth_requestAccounts' });
     const receipt = await contract_user.methods.Registeruser().send( {from: accounts[0], gas: '1000000'});
 
     console.log(receipt);
     console.log(accounts[0]);
    
     //localStorage["UserAddress"] = JSON.stringify( receipt.events.register_User.returnValues.UserAdd);
     //localStorage["UserID"] = JSON.stringify( receipt.events.register_User.returnValues.UserID);

    

     console.log( localStorage["UserAddress"]);
     window.location.href = 'http://127.0.0.1:3000/test-main.html';

  }
  catch (error) {

    window.alert("Please install MetaMask");
    console.log(error);
 }
     
  }

  
    
     
 loginbuttom.onclick = adduser;
  






