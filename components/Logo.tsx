import React from 'react';
import './Logo.css';
// import { GiCube } from "react-icons/gi";
const Logo = ({fontClass}) => {
  return (
    <div id="Logo" className="flex items-center">
      {/* <div className="logo h-full w-full flex items-center justify-center ml-2 text-white"><GiCube size={24}/></div> */}
      <img src="/cube.png" alt="" className='w-[32px] h-32px' />
      <span className={fontClass}>Foo</span>
    </div>
  );
};

export default Logo;
