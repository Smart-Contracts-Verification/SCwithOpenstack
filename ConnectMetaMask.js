  //Basic Actions Section

//const { getElementById } = require("min-document");

  //const ethereumButton = document.querySelector('.enableEthereumButton');
  //const showAccount = document.getElementById('showAccount');
  //const loginbtn= document.getElementById('btnlogin');
  const loginbuttom= document.getElementById('loginbuttom');

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

  const web3 = new Web3(window.ethereum);
  var  contract_user= new web3.eth.Contract(userabi, useraddress);
  const accounts= await ethereum.request({ method: 'eth_requestAccounts' });
 

async function registerUSER() 
  {
     const receipt = await contract_user.methods.Registeruser().send( {from: accounts[0], gas: '1000000'});
     return receipt;
     
   
 
 }

  //Created check function to see if the MetaMask extension is installed
 async function  isMetaMaskInstalled(){
    //Have to check the ethereum binding on the window object to see if it's installed
   const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
  };


  async function onClickConnect() {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      
     window.location.href = 'http://127.0.0.1:3000/test-main.html'
     //ethereumButton.innerText = 'Wallet is connected';
     //showAccount.innerHTML = accounts[0] || 'Not able to get accounts'
    } catch (error) {
      console.error(error);
      
    }
  };

  async function  MetaMaskClientCheck(){
    //Now we check to see if Metmask is installed
   if (!isMetaMaskInstalled()) {
     // If it isn't installed we ask the user to click to install it
      loginbuttom.innerText = 'Please install MetaMask!';
      console.log('Please install MetaMask!')
      //When the button is clicked we call th is function
   
    } else {
      //If MetaMask is installed we ask the user to connect to their wallet
      //loginbtn.innerText = 'Connect your Wallet MetaMask';
      //When the button is clicked we call this function to connect the users MetaMask Wallet
     // console.log('Connect your Wallet MetaMask');
      let register =await registerUSER();
      console.log(register);
      let nextpage =await onClickConnect();

      
    }
  };


  loginbuttom.onclick = MetaMaskClientCheck;
  






