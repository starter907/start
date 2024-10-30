import React from 'react';
import { useSelector } from 'react-redux';
import './styleSexyCloud.css';
import sexyCloudImage from '../../assets/sexyCloud.png';
import textCloudImage from '../../assets/textCloud.png';

const SexyCloud = () => {
  const scrollPosition = useSelector((state) => state.scroll.scrollPosition);
  const cloudAppearPosition = useSelector((state) => state.scroll.cloudAppearPosition);

  const isVisible = scrollPosition > cloudAppearPosition;
  const isTextVisible = scrollPosition > cloudAppearPosition + 100;
  return (
    <div className={`cloud-container ${isVisible ? 'visible' : ''}`}>
      <img src={sexyCloudImage} alt="Облако" className="cloud-image" />
      <img
        src={textCloudImage}
        alt="Текст на облаке"
        className={`text-on-cloud ${isTextVisible ? 'visible' : ''}`}
      />
    </div>
  );
};

export default SexyCloud;
