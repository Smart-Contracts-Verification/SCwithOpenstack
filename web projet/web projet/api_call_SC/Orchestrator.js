const Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:8545'));


var contractAddress = require('C:/Users/admindsi/Desktop/web projet/scr/contract_addresses/orchetrator_address.json');
var abi = require('C:/Users/admindsi/Desktop/web projet/scr/abi_contract/abi_orchestrator.json');
var contract = new web3.eth.Contract(abi, contractAddress.addressSC);
var account = '0x99a4Dce4Bf10db83Ea7D38890b7f72b0f09bb3C5';


var contractAddress1 = require('C:/Users/admindsi/Desktop/web projet/scr/contract_addresses/vnffactory_address.json');
var abi1 = require('C:/Users/admindsi/Desktop/web projet/scr/abi_contract/abi_vnffactory.json');
var contract1 = new web3.eth.Contract(abi1, contractAddress1.addressSC);





   /**************************************************** */
    /**************************************************** */
    /**********************  Fetch VNF****************************** */
async function Fetch_VNF(_CPU, _Storage, _RAM ) {

    const receipt = await contract.methods.FetchVNF(_CPU,  _Storage,  _RAM).send( {from: account, gas: '1000000'}, function (err, res) {

        if (err) {
          console.log("An error occured", err)
          return
        }
        console.log("Hash of the transaction: " + res);
       
       
      }); //receipt.events.ResourcesAVALIBILities
      
      console.log(receipt.events.Fetch.returnValues.text+":" + receipt.events.Fetch.returnValues.b + "Wei")
      return  (receipt.events.Fetch.returnValues.b);
    }





    /**************************************************** */
    /**************************************************** */
    /**********************  Deploy VNF****************************** */
async function Create_VNFSC() {
   
    const receipt =  await contract.methods.createVNFcontract_instance().send( {from: account, gas: '1000000'}, function (err, res) {

        if (err) {
          console.log("An error occured", err)
          return
        }

       // web3.eth.getTransactionReceipt(res, function (error, result){
         //   console.log(result);
        //});
    
    });
    //console.log(receipt);
    
    const eventout =  await contract1.getPastEvents('newinstanceSC', {fromBlock: 'latest',
        toBlock: 'latest'}, function(error, events){ console.log(events); 
        
            return events;
        })


}
      

async function createVNF(_CPU, _Storage, _RAM) {
    
    const receipt1 =  contract.methods.create_VNF(_CPU, _Storage, _RAM).send( {from: account, gas: '1000000',value: 1500000000000000000}, function (err, res) {

        if (err) {
          console.log("An error occured", err)
          return
        }
        console.log(res)
        
    });

}
/**************************************************** */
/**************************************************** */
/**************************************************** */



  /**************************************************** */
/**************************************************** */
/*************************Termintae VNF*************************** */

  async function DeleteVNF(VNFID) {

    const receipt = await contract.methods.Terminate_VNF(VNFID).send( {from: account, gas: '1000000'}, function (err, res) {

        if (err) {
          console.log("An error occured", err)
          return
        }
    
        console.log("Hash of the transaction: " + res);
        
       
      });
      console.log(receipt);
      
  }


  //DeleteVNF(1);


  /**************************************************** */
/**************************************************** */
/**************************Scale VNF************************** */
  async function SCALE_OUT_VNF(VNFID, _CPU, _Storage, _RAM) {

    const receipt = await contract.methods.Scale_VNF(VNFID, _CPU, _Storage, _RAM).send( {from: account, gas: '1000000'}, function (err, res) {

        if (err) {
          console.log("An error occured", err)
          return
        }
    
        console.log("Hash of the transaction: " + res);
    
       
      }); //receipt.events.ScaleVNF.returnValues.Pr_add
      console.log(receipt);
      
  }

 
