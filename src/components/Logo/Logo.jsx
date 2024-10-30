import React from 'react';
import { useSelector } from 'react-redux';
import './styleLogo.css';
import startLogo from '../../assets/startLogo.png';

const Logo = () => {
  const scrollPosition = useSelector((state) => state.scroll.scrollPosition);

  const isSticky = scrollPosition > 0;

  return (
    <div className={`logo ${isSticky ? 'sticky' : ''}`}>
      <img src={startLogo} alt="Логотип" className="logo-image" />
    </div>
  );
};

export default Logo;
