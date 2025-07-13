import React, { useState } from "react";
import { ethers } from "ethers";
import abi from "../abi.json";
import bytecode from '../bytecode.json'
// مسیر رو با پروژه‌ات تنظیم کنimport bytecode from "../bytecode.json"; // مسیر رو با پروژه‌ات تنظیم کن
const DeployHelloContract = ({ walletAddress }) => {
  const [deployStatus, setDeployStatus] = useState(""); const [contractAddress, setContractAddress] = useState(""); const [txHash, setTxHash] = useState("");
  const handleDeploy = async () => {
    try {
      if (!window.ethereum) { setDeployStatus("please install metamask"); return; }
      // دیباگ: چک کن که walletAddress معتبره      console.log("walletAddress received:", walletAddress);      if (!walletAddress || typeof walletAddress !== "string" || walletAddress.length < 10) {        setDeployStatus("Please connect the wallet correctly first.");        return;      }
      setDeployStatus("Deploying the contract..."); const provider = new ethers.BrowserProvider(window.ethereum); const signer = await provider.getSigner(); const network = await provider.getNetwork(); if (Number(network.chainId) !== 8408) { setDeployStatus("(Chain ID: 8408)plaes connect zenchain"); return; }
      const factory = new ethers.ContractFactory(abi, bytecode.object || bytecode, signer); const contract = await factory.deploy(); const tx = await contract.waitForDeployment(); const address = await contract.getAddress(); setContractAddress(address); setTxHash(tx.transactionHash); setDeployStatus("Deployment was successful!");
    } catch (err) { console.error("Error in deployment:", err); setDeployStatus("Error in deployment: " + err.message); }
  };
  return (<div style={{ textAlign: "center", marginTop: "20px" }}>
    <button onClick={handleDeploy} style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#ea09cf", color: "#1a1a1a", border: "none", cursor: "pointer", margin: "10px", }}
    >
      Deploy Hello Contract
    </button>
    {deployStatus && (<p style={{ color: deployStatus.includes("خطا") ? "red" : "#ea09cf", fontSize: "16px", marginTop: "10px" }}>
      {deployStatus}
    </p>)}
    {contractAddress && (<p style={{ color: "#ea09cf", fontSize: "16px", marginTop: "10px" }}>address contract: {contractAddress}</p>)}
    {txHash && <p style={{ color: "#ea09cf", fontSize: "16px", marginTop: "10px" }}>هش تراکنش: {txHash}</p>} </div>);
};
export default DeployHelloContract;