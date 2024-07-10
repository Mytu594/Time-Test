import React from 'react';
import DashboardNav from './DashboardNav';
import DashboardFooter from './DashboardFooter';
import Card from '../Card/Card';
import { FaRegCheckCircle,FaPaperPlane } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { RxSwitch } from "react-icons/rx";
import { PiGameControllerFill } from "react-icons/pi";
import './index.css';
import './index.css';
import { Covered_By_Your_Grace } from '@next/font/google';
const font = Covered_By_Your_Grace({weight:'400',subsets: ['latin'] });
const DashboardComponent = () => {
  return (
    <section id="Dashboard" className="h-full">
      <div className="dashboard-container h-full w-full flex flex-col">
        <DashboardNav />
        <div className="content w-full mx-auto flex-grow my-3">
          <div className="toast">
          <FaRegCheckCircle className="icon text-[#76f7ba] mr-2"/>
            <span className="toast-text">
              Toast Content Toast Content Toast Content Toast Content
            </span>
          </div>
          
          <h1 className={"hero-text" + ' '+ font.className}>Dashboard</h1>
          <div className="grid row-gap-1 w-3/5 mx-auto">
            <div>
              <Card
                list={[
                  {
                    icon: 'xxx',
                    isTitle: true,
                    info: {},
                    text: 'Global Rank',
                    value: '2,822,378',
                  },
                  {
                    text: 'Active Minters',
                    value: '6,522,912',
                  },
                  {
                    text: 'Active Stakes',
                    value: '19,921',
                  },
                  {
                    text: 'Time Since Genesid',
                    value: '2 year',
                  },
                ]}
              ></Card>
            </div>
            <div className="grid column-gap-1 grid-cols-2">
              <div>
                <Card
                  list={[
                    {
                      text: 'Total Supply',
                      value: '134,580,552,934,330',
                    },
                    {
                      text: 'Liquid Supply',
                      value: '114,580,552,934,330',
                    },
                    {
                      text: 'Total Ttaked',
                      value: '28,580,552,934,330',
                    },
                  ]}
                ></Card>
              </div>
              <div>
                <Card
                  list={[
                    {
                      text: 'Max Term, days',
                      value: '466',
                    },
                    {
                      info: {},
                      text: 'AMP',
                      value: '2,912',
                    },
                    {
                      info: {},
                      text: 'EAA',
                      value: '0%',
                    },
                    {
                      info: {},
                      text: 'APY',
                      value: '14%',
                    },
                  ]}
                ></Card>
              </div>
            </div>
          </div>
          <div className="fixed  right-52 top-1/2 transform -translate-y-1/2 space-y-4 flex flex-col text-white text-2xl font-bold">
        {/* {socialIcons.map((icon,index) => (
          <button key={icon} className=" p-2 w-12 h-12 rounded-full"  style={{border:'1px solid white'}}>
            {icon}
          </button>
        ))} */}
            <button className="p-3 w-12 h-12 rounded-full "  style={{border:'1px solid white'}}>
            <AiOutlineX />
            </button>
            <button className=" p-3 w-12 h-12 rounded-full"  style={{border:'1px solid white'}}>
            <RxSwitch />
            </button>
            <button className=" p-3 w-12 h-12 rounded-full bg-[#d43494]">
              <FaPaperPlane />
            </button>
            <button className=" p-3 w-12 h-12 rounded-full "  style={
              {border:'1px solid white'}}>
              <PiGameControllerFill />
            </button>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </section>
  );
};

export default DashboardComponent;
