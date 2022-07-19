import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/binance.png";
import release2 from "../assets/roadmap.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Smart Contract Security</h2>
          <p className="description">
          Smart contract is an agreement between two parties in the form of computer code that runs on a blockchain network.
          </p>
          <p className="description">
          he agreement will be stored in a public database and cannot be changed. The transactions are processed by the blockchain where the smart contract can be sent automatically without having any third party involve such as (banks, governments, brokers,
          etc.). Transactions will only occur if the terms of the agreement are met. Without a third party,
          there is no entity could execute the smart contract.
          </p>
          <p className="description">With such safety features, the Neobit Team
            will keep conducting routine auditing and layered security checks.</p>
          <a href="#" className="link">
            Check NeoBit Contract <BsArrowRight />
          </a>
        </div>
          <div className="card-container">
            <Card
              image={release1}
              series="BSC Smart Contract"
              title="Smart Contract Security"
              price={3.95}
              tag="1094"
              time={2}
            />
            <div className="ellipse orange"></div>
          </div>
      </div>

      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="NeoBit Roadmap Progress"
            title="RoadMap"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Roadmap of Neobit Protocol (Phase 1)</h2>
          <p className="description"><BsArrowRight /> Concept building</p>
          <p className="description"><BsArrowRight /> Website development</p>
          <p className="description"><BsArrowRight /> Community campaigne</p>
          <p className="description"><BsArrowRight /> Create whitepaper</p>
          <p className="description"><BsArrowRight /> Marketing campaigne</p>
          <p className="description"><BsArrowRight /> Smartcontract building</p>
          {/* <a href="#" className="link">
            Check next progress <BsArrowRight />
          </a> */}
        </div>
      </div>
    </div>
  );
}
