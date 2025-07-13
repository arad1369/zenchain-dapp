
import React, { useState } from 'react';
import { ethers } from 'ethers';

const ConnectWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
    } else {
      alert('Please install MetaMask');
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {walletAddress ? 'Connected: ' + walletAddress.slice(0, 6) + '...' : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default ConnectWallet;
