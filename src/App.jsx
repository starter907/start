import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setScrollPosition, setCloudAppearPosition } from './store/scrollSlice';
import Logo from './components/Logo/Logo';
import SexyCloud from './components/SexyCloud/SexyCloud';
import Buttons from './components/Buttons/Buttons';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const logoTravelDistance = window.innerHeight / 2 - 70;
    dispatch(setCloudAppearPosition(logoTravelDistance));

    const handleScroll = () => {
      const position = window.scrollY;
      dispatch(setScrollPosition(position));
    };

    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      const updatedLogoTravelDistance = window.innerHeight / 2 - 70;
      dispatch(setCloudAppearPosition(updatedLogoTravelDistance));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <div>
      <Logo />
      <SexyCloud />
      <Buttons />
      <div style={{ height: '200vh' }}></div>
    </div>
  );
};

export default App;
