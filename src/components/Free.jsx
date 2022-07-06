import React from "react";
import Card from "./Card";
import icon from "../assets/logo.png";
import super1 from "../assets/swap.png";
import release2 from "../assets/lock.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Trade, Earn on the most progressive DEX on BNB Chain</h2>
          <p className="description">
            Instead, it uses smart contract based on blockchain technology, which allows developers to build better functions. Decentralized Exchange consist of trading, saving, Earn, and insurances services that can be accessed by anyone at any time using a smartphone or a laptop and internet connection.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Launch App Information"
            title="SWAP"
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Launch App Information"
            title="LIQUIDITY"
          />
        </div>
      </div>
    </div>
  );
}
