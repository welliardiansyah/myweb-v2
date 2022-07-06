import React from "react";
import logo from "../assets/logo.png";
import { BsDiscord, BsTwitter, BsTelegram, BsYoutube } from "react-icons/bs";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["Docs", "Team", "News", "Github"],
    },
    {
      title: "Features",
      data: ["Swap", "Liquidity", "NeoBitFarm", "NeoBitPad", "Staking"],
    },
    {
      title: "Services",
      data: ["Referal Program", "NeoBit Token", "Apply to Launch", "Space Agent"],
    },
    {
      title: "Communities",
      data: ["Discord", "Telegram", "Twitter"],
    },
  ];
  const socialLink = [
    <a className="minilink" href="" target="_blank"><BsDiscord /></a>,
    <a className="minilink" href="https://t.me/NeoBit_Official" target="_blank"><BsTelegram /></a>,
    <a className="minilink" href="https://twitter.com/neobitprotocol" target="_blank"><BsTwitter /></a>,
    <a className="minilink" href="" target="_blank"><BsYoutube /></a>,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Neobit Token is a governance token built on the Binance Smart Chain (BEP20)  <br />  blockchain network,
              created to build the DeFi ecosystem and deliver <br /> rights to all Neobit holders to also manage
              the platform through a voting mechanism.</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 NeoBit Protocol.</span>
        <span>Development by NeoBit.tech - Version 2.0</span>
      </div>
    </footer>
  );
}
