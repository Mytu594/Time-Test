import React from 'react';
import './DashboardFooter.css';
import Logo from '../Logo';
import { Mochiy_Pop_P_One } from '@next/font/google';
const font = Mochiy_Pop_P_One({weight:'400',subsets: ['latin'] });
const DashboardFooter = () => {
  return (
    <footer id="DashboardFooter" className="flex justify-between items-center">
      <Logo fontClass={font.className}/>
      <span className="copyright">© 2024 Foo</span>
    </footer>
  );
};

export default DashboardFooter;
