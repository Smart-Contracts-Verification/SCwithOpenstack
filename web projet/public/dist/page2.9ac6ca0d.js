async function isMetaMaskInstalled() {
    const { ethereum: ethereum1  } = window;
    return Boolean(ethereum1 && ethereum1.isMetaMask);
}
async function connectWallet() {
    return await ethereum.request({
        method: "eth_accounts"
    });
}
document.getElementById("btn").addEventListener("click", async ()=>{
    try {
        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });
        connected(accounts);
    } catch (error) {
        console.error(error);
    }
});
async function MetaMaskClientCheck() {
    if (isMetaMaskInstalled()) connectWallet().then((accounts)=>{
        if (accounts && accounts[0] > 0) ;
        else alert("please connect to your metamask wallet: ");
    });
    else alert("please install metamask wallet");
}

//# sourceMappingURL=page2.9ac6ca0d.js.map
