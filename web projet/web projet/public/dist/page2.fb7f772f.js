async function isMetaMaskInstalled() {
    const { ethereum: ethereum1  } = window;
    return Boolean(ethereum1 && ethereum1.isMetaMask);
}
async function connectWallet() {
    return await ethereum.request({
        method: "eth_accounts"
    });
}
async function MetaMaskClientCheck() {
    if (isMetaMaskInstalled()) connectWallet().then((accounts)=>{
        if (accounts && accounts[0] > 0) alert("account = " + accounts[0]);
        else alert("please connect to your metamask wallet: ");
    });
    else alert("please install metamask wallet");
}

//# sourceMappingURL=page2.fb7f772f.js.map
