import React from 'react';
import './DashboardNav.css';
import Logo from '../Logo';
import { PiCirclesThreeFill } from "react-icons/pi";

const DashboardNav = () => {
  return (
    <header id="DashboardNav" className="flex justify-between">
      <Logo />
      <div className="flex items-center">
        <div className="nav-btns">
          <button className="nav-btn active">Dashboard</button>
          <button className="nav-btn">Mint</button>
          <button className="nav-btn">Vault</button>
          <button className="nav-btn">Stake</button>
        </div>
        <div className="account-overview flex items-center">
          <div className="currency-display flex items-center">
            <PiCirclesThreeFill className="currency-icon text-[#d43494]"/>
            <span className="amount">0,000 ETH</span>
          </div>
          <div className="user-profile flex items-center">
            <i className="user-avatar text-[#d43494] bg-[#76f7ba]"></i>
            <span className="user-name">0x12...123412</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
