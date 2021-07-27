import React, { useState } from "react";
import "./App.css";
import abiJSON from "./faucet.json";

import { ethers } from "ethers";

let abi = abiJSON;
const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const contractAddress = "0x60288dec3343db133a8288c70b8e151e52627ee2";

const faucetContract = new ethers.Contract(contractAddress, abi, signer);

function App() {
 const [address, setAddress] = useState("")
 const [buttonText, setButtonText] = useState("Request")

 const mintTokens = async (t) => {
   t.preventDefault();
   setButtonText("Requesting...")
   const accounts = await window.ethereum.enable();
   const account = accounts[0];
   const gas = await faucetContract.estimateGas.mint(address);
   const post = await faucetContract.mint(address);
   setButtonText("Request")
   alert("Mint success!")
 };

 return (
   <div className="cargo">
     <header className="AppHeader">
      <div className="logo">YIN</div>
      <div className="links">
      <div className="walletBlock">
        </div>
        <a href='https://alpha.yin.finance'>Alpha Test YIN</a>
      </div>
    </header>
     <div className="case">
       <form className="form" onSubmit={mintTokens}>
          <p>Request tokens from YIN Finance Alpha Faucet</p>
          <p>You will get 200 <a href="https://rinkeby.etherscan.io/address/0x67751356e2ac7ca20cb991bf3edf7d4a439b7cbe" target='_blank'>tusdt</a>, 200<a href="https://rinkeby.etherscan.io/address/0x8543a038bef4de734b4bc2235a97f7eaf439625f" target='_blank'>tdai</a>, 200<a href="https://rinkeby.etherscan.io/address/0x130785fd1f629956d221d7226f4c03e1b692064a" target='_blank'>tfei</a>, 200<a href="https://rinkeby.etherscan.io/address/0x849cdf076a4cccc724258d88caebfd566e808305" target='_blank'>trai</a>, 200<a href="https://rinkeby.etherscan.io/address/0x3ad6b1f58e37f17f295edc74200ce140bd3020c3" target='_blank'>tusdc</a> in Rinkeby.</p>

         <label>
           <input
             className="input"
             type="text"
             name="name"
             value={address}
             onChange={(t) => setAddress(t.target.value)}
           />
         </label>
         <button className="button" type="submit" value="Confirm">
           {buttonText}
         </button>
       </form>
     </div>
   </div>
 );
}

export default App;