async function isMetaMaskInstalled() {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
}


async function connectWallet() {
    return await ethereum.request({ method: 'eth_accounts' });
    
}

async function MetaMaskClientCheck() {
    if(isMetaMaskInstalled()){
        connectWallet().then((accounts) => {
            if (accounts && accounts[0] > 0) {
                alert("account = " + accounts[0]);
                
            }
                else {
                   
                    alert("please connect to your metamask wallet: ");
                    
                }
        })
    }else {alert("please install metamask wallet");}


    }


