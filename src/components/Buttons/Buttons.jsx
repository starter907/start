import React from 'react';
import { useSelector } from 'react-redux';
import './styleButtons.css';
import pinkButtonImage from '../../assets/pinkButton.png';
import blueButtonImage from '../../assets/blueButton.png';
import authImage from '../../assets/auth.png';
import skipImage from '../../assets/skip.png';

const Buttons = () => {
  const scrollPosition = useSelector((state) => state.scroll.scrollPosition);
  const cloudAppearPosition = useSelector((state) => state.scroll.cloudAppearPosition);

  const additionalScroll = 200;
  const buttonsAppearThreshold = cloudAppearPosition + additionalScroll;

  const isVisible = scrollPosition > buttonsAppearThreshold;
  const isTextVisible = scrollPosition > buttonsAppearThreshold + 100;
  return (
    <div className={`buttons-container ${isVisible ? 'visible' : ''}`}>
      <div
        className="btn-wrapper"
        onClick={() => {
          console.log('лэфт баттон');
        }}
      >
        <img src={pinkButtonImage} alt="Левая кнопка" className="btn-image" />
        <img
          src={authImage}
          alt="Авторизация"
          className={`btn-text-image ${isTextVisible ? 'visible' : ''}`}
        />
      </div>

      <div
        className="btn-wrapper"
        onClick={() => {
          console.log(
            'Я правая кнопка и я люблю быть нажатой (..если вы понимаете о чем я)',
          );
        }}
      >
        <img src={blueButtonImage} alt="Правая кнопка" className="btn-image" />
        <img
          src={skipImage}
          alt="Пропустить"
          className={`btn-text-image ${isTextVisible ? 'visible' : ''}`}
        />
      </div>
    </div>
  );
};

export default Buttons;
