import React from 'react';
import './Logo.css';
import { GiCube } from "react-icons/gi";
import { Covered_By_Your_Grace } from '@next/font/google';
const font = Covered_By_Your_Grace({weight:'400',subsets: ['latin'] });
const Logo = () => {
  return (
    <div id="Logo" className="flex items-center">
      <div className="logo h-full w-full flex items-center justify-center ml-2 text-white"><GiCube size={24}/></div>
      <span className={font.className}>Foo</span>
    </div>
  );
};

export default Logo;
