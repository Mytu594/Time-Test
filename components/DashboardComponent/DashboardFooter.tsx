import React from 'react';
import './DashboardFooter.css';
import Logo from '../Logo';

const DashboardFooter = () => {
  return (
    <footer id="DashboardFooter" className="flex justify-between items-center">
      <Logo/>
      <span className="copyright">© 2024 Foo</span>
    </footer>
  );
};

export default DashboardFooter;
