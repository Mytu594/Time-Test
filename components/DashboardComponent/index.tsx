import React from 'react';
import DashboardNav from './DashboardNav';
import DashboardFooter from './DashboardFooter';
import Card from '../Card/Card';
import { FaRegCheckCircle } from "react-icons/fa";
import './index.css';
import './index.css';
import { Covered_By_Your_Grace,Montserrat } from '@next/font/google';
const font = Covered_By_Your_Grace({weight:'400',subsets: ['latin'] });
const Mfont = Montserrat({weight:'400',subsets: ['latin'] });
const DashboardComponent = () => {
  return (
    <section id="Dashboard" className="h-full">
      <div className="dashboard-container h-full w-full flex flex-col">
        <DashboardNav />
        <div className="content w-full mx-auto flex-grow my-3">
          <div className="toast">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon text-[#00FFB2] mr-2">
              <g clip-path="url(#clip0_121_46)">
                <path d="M9.99984 18.3332C12.301 18.3332 14.3843 17.4004 15.8924 15.8924C17.4004 14.3843 18.3332 12.301 18.3332 9.99984C18.3332 7.69867 17.4004 5.61534 15.8924 4.10728C14.3843 2.59925 12.301 1.6665 9.99984 1.6665C7.69867 1.6665 5.61534 2.59925 4.10728 4.10728C2.59925 5.61534 1.6665 7.69867 1.6665 9.99984C1.6665 12.301 2.59925 14.3843 4.10728 15.8924C5.61534 17.4004 7.69867 18.3332 9.99984 18.3332Z" fill="#00FFB2" stroke="#00FFB2" stroke-width="2" stroke-linejoin="round"/>
                <path d="M6.6665 10L9.1665 12.5L14.1665 7.5" stroke="#0C101B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_121_46">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <span className={"toast-text"+" "+Mfont.className}>
              Toast Content Toast Content Toast Content Toast Content
            </span>
          </div>
          
          <h1 className={"hero-text" + ' '+ font.className}>DASHBOARD</h1>
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
            <div className={"grid column-gap-1 grid-cols-2"+" "+Mfont.className} >
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
          <div className="hero-btns fixed  right-52 top-1/2 transform -translate-y-1/2 space-y-4 flex flex-col text-white text-2xl font-bold">
        {/* {socialIcons.map((icon,index) => (
          <button key={icon} className=" p-2 w-12 h-12 rounded-full">
            {icon}
          </button>
        ))} */}
            <button className="">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3263 0H20.6998L13.3297 8.4718L22 20H15.2112L9.89403 13.0082L3.80995 20H0.434432L8.31743 10.9385L0 0H6.96111L11.7674 6.39077L17.3263 0ZM16.1423 17.9692H18.0116L5.94539 1.9241H3.93946L16.1423 17.9692Z" fill="white" fill-opacity="0.7"/>
            </svg>
            </button>
            <button className="">
            <svg width="31" height="18" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4859 9.00015C17.4859 13.9706 13.5715 18 8.74308 18C3.91469 18 0 13.9697 0 9.00015C0 4.03057 3.91439 0 8.74308 0C13.5718 0 17.4859 4.02966 17.4859 9.00015ZM27.077 9.00015C27.077 13.6788 25.1198 17.4731 22.7055 17.4731C20.2911 17.4731 18.3339 13.6788 18.3339 9.00015C18.3339 4.32151 20.2908 0.527206 22.7052 0.527206C25.1195 0.527206 27.0767 4.32029 27.0767 9.00015H27.077ZM31 9.00015C31 13.1911 30.3118 16.5906 29.4625 16.5906C28.6133 16.5906 27.9253 13.192 27.9253 9.00015C27.9253 4.80832 28.6136 1.40973 29.4625 1.40973C30.3115 1.40973 31 4.80802 31 9.00015Z" fill="white" fill-opacity="0.7"/>
            </svg>
            </button>
            <button className="">
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.423911 10.5489L5.954 12.722L8.09448 19.9694C8.23144 20.4336 8.77056 20.6052 9.1284 20.2971L12.211 17.6514C12.5341 17.3742 12.9943 17.3604 13.332 17.6185L18.8919 21.8683C19.2747 22.1612 19.817 21.9404 19.913 21.4534L23.9859 0.82706C24.0907 0.295085 23.5942 -0.148705 23.1131 0.047206L0.417431 9.26505C-0.142649 9.49247 -0.137769 10.3273 0.423911 10.5489ZM7.74952 11.5652L18.5574 4.55695C18.7516 4.43137 18.9515 4.70789 18.7847 4.87078L9.86504 13.6C9.55152 13.9073 9.34928 14.3185 9.292 14.7648L8.98816 17.1354C8.94792 17.452 8.5256 17.4834 8.44264 17.1771L7.27408 12.8541C7.14024 12.3611 7.33528 11.8344 7.74952 11.5652Z" fill="white"/>
            </svg>
            </button>
            <button className="">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 1.65789C18.7873 0.890533 17.147 0.325167 15.4319 0.00135747C15.4007 -0.00488967 15.3694 0.0107282 15.3534 0.0419639C15.1424 0.452193 14.9087 0.987364 14.7451 1.408C12.9004 1.10606 11.0652 1.10606 9.25832 1.408C9.09466 0.977993 8.85248 0.452193 8.64058 0.0419639C8.6245 0.0117694 8.59328 -0.00384848 8.56206 0.00135747C6.84792 0.324126 5.20756 0.889492 3.67694 1.65789C3.66369 1.66414 3.65234 1.67455 3.64477 1.68808C0.533392 6.77013 -0.31895 11.7272 0.0991801 16.6229C0.101072 16.6469 0.11337 16.6698 0.130398 16.6843C2.18321 18.3325 4.17169 19.3331 6.12328 19.9964C6.1545 20.0068 6.18761 19.9943 6.20748 19.9662C6.66912 19.2769 7.08063 18.5501 7.43349 17.7859C7.4543 17.7411 7.43443 17.688 7.39186 17.6703C6.73913 17.3996 6.11761 17.0696 5.51974 16.6947C5.47244 16.6646 5.46865 16.5906 5.51217 16.5552C5.63799 16.4522 5.76381 16.3449 5.88395 16.2366C5.9057 16.2168 5.93598 16.2127 5.96152 16.2252C9.88929 18.1857 14.1415 18.1857 18.023 16.2252C18.0485 16.2116 18.0788 16.2158 18.1015 16.2356C18.2216 16.3439 18.3474 16.4522 18.4742 16.5552C18.5177 16.5906 18.5149 16.6646 18.4676 16.6947C17.8697 17.0769 17.2482 17.3996 16.5945 17.6693C16.5519 17.687 16.533 17.7411 16.5538 17.7859C16.9143 18.5491 17.3258 19.2759 17.7789 19.9651C17.7978 19.9943 17.8319 20.0068 17.8631 19.9964C19.8241 19.3331 21.8126 18.3325 23.8654 16.6843C23.8834 16.6698 23.8948 16.6479 23.8967 16.6239C24.3971 10.964 23.0585 6.04754 20.3482 1.68913C20.3416 1.67455 20.3303 1.66414 20.317 1.65789ZM8.02001 13.642C6.83751 13.642 5.86313 12.455 5.86313 10.9974C5.86313 9.53969 6.81859 8.35274 8.02001 8.35274C9.23088 8.35274 10.1958 9.55011 10.1769 10.9974C10.1769 12.455 9.22142 13.642 8.02001 13.642ZM15.9948 13.642C14.8123 13.642 13.8379 12.455 13.8379 10.9974C13.8379 9.53969 14.7933 8.35274 15.9948 8.35274C17.2056 8.35274 18.1705 9.55011 18.1516 10.9974C18.1516 12.455 17.2056 13.642 15.9948 13.642Z" fill="white" fill-opacity="0.7"/>
              </svg>
            </button>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </section>
  );
};

export default DashboardComponent;
