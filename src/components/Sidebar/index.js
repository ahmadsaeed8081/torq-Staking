import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoutIcon } from "../../assets/Icons";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import ConnectWalletButton from "../../components/ConnectWalletButton";

const Sidebar = () => {
  const { open, close } = useWeb3Modal();
  const { address, isConnected, isDisconnected } = useAccount();

  const navBarItems = [
    { lbl: "Dashboard", slug: "/" },
    {
      lbl: "Investment",
      slug: "/stacking",
    },
    { lbl: "Transaction History", slug: "/history" },
    { lbl: "Referral", slug: "/reward" },


  ];

  return (
    <div className={`sidebar-s fixed anim show`} >
      <div
        className={`side-block flex flex-col justify-between anim show gap-2`}
      >
        <div className="side-hdr flex items-center justify-center" >
          <img src="/images/torq_logo.png" className="h-30 w-30" />
        </div>
        <div className="items flex aic flex-col gap-2"> 
          {navBarItems.map((item, index) => (
            <NavLink key={index} to={item.slug} className={`item flex`}>
              <div className="li">{item.lbl}</div>
            </NavLink>
          ))}
        </div>
        <div className="side-footer flex items-center  justify-center">
          <ConnectWalletButton />
          {/* <button className="btn-logout button">
            <h1 className="btn-icon">
              <LogoutIcon />
            </h1>
            <h1 className="btn-lbl" onClick={open}>
              {isConnected ? "Disconnect" : "Connect Wallet"}
            </h1>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
