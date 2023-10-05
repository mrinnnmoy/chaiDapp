import React, { useState } from 'react';

const Navbar = () => {
    const [account, setAccount] = useState("Connect");

    // Connect Button function
    async function connect() {
        try {
            if (window.ethereum) {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x13881' }], });
                window.ethereum.on("accountsChanged", () => {
                    window.location.reload();
                });
                setAccount("Connected");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='navbar'>
                <p>Buy Me a Chai</p>
                <button onClick={connect}>{account}</button>
            </div>
        </div>
    )
};

export default Navbar;