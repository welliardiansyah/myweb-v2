import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Neobit Protocol</p>
          <h2 className="title">What is NeoBit Protocol.</h2>
          <p className="description">
          Neobit Token is a governance token built on the Binance Smart Chain (BEP20) blockchain network, created to build the DeFi ecosystem and deliver rights to all Neobit holders to also manage the platform through a voting mechanism.
          </p>
          <h6 className="title">400,000,000. Total Supply NeoBits.</h6>
          <a href="https://swap.neobit.tech" target="_blank">
            <button>Swap Now</button>
          </a>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
