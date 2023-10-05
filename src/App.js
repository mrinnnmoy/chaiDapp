import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

// Importing components
import "./App.css";
import abi from "./constants/chai.json";
import Navbar from "./components/Navbar";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import Footer from "./components/Footer";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0xd3106b87463e98ADD38E6070Ca1e80B7D80ab9e9";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          // const account = await ethereum.request({
          //   method: "eth_requestAccounts",
          // });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          })
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          })

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer,
          );
          setState({ provider, signer, contract });
        } else {
          alert(
            "Please use a WEB3 wallet extension to interact with the website !!!"
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);


  return (
    <div>
      <Navbar />
      <div className="main">
        <Buy state={state} />
        <Memos state={state} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
