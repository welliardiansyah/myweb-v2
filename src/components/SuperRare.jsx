import React from "react";
import Card from "./Card";
import super1 from "../assets/swap.png";
import super2 from "../assets/lock.png";
import super3 from "../assets/blockchain.png";
import super4 from "../assets/tractor.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Features Neobit Swap",
      title: "Swap Tokens.",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super2,
      series: "Features Neobit Liquidity Pools",
      title: "Liquidity. (Under Construction) ",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "Features Neobit Staking",
      title: "Staking. (Under Construction)",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super4,
      series: "Features Neobit Farming",
      title: "Farming. (Under Construction)",
      price: 2.99,
      tag: 12983,
      time: 1,
    }
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Features Available in Neobit Protocol.</h2>
        <p className="description">
          Swap, Staking, Farming, Liquidity Pool, LaunchPads, NFT. <a href="https://exchange.neobit.tech" target="_blank">Open Launch Dapps</a>.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
