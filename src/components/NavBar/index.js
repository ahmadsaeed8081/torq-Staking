import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HomeIcon,
  StakeIcon,
  ClockIcon,
  ReplaceIcon,
  CardIcon,
} from "../../assets/Icons";

const NavBar = () => {
  const navBarItems = [
    { lbl: "Dashboard", slug: "/", img: "/images/HomeIcon.svg" },
    {
      lbl: "Investment",
      slug: "/stacking",
      img: "/images/StakeIcon.svg",
    },
    {
      lbl: "Transaction History",
      slug: "/history",
      img: "/images/ClockIcon.svg",
    },
    {
      lbl: "Level Rewards",
      slug: "/reward",
      img: "/images/ReplaceIcon.svg",
    },
    // {
    //   lbl: "KYC Verification",
    //   slug: "/dashboard/verification",
    //   img: "/images/CardIcon.svg",
    // },
    // {
    //   lbl: "Profile",
    //   slug: "/dashboard/profile",
    //   img: "/images/CardIcon.svg",
    // },
  ];
  return (
    <div className="nav-comp flex">
      <div className="wrap flex w-full">
        <div className="nav-links flex items-center w-full">
          {navBarItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item flex items-center justify-center `}
            >
              <NavLink
                to={item.slug}
                className="icon flex items-center justify-center"
              >
                <img src={item.img} className="h-7 w-7" />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
