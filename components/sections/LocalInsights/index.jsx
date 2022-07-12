import Image from 'next/image';
import { useState, useEffect } from 'react';
import getImg from '../../../utils/getImg';

const LocalInsights = ({data}) => {
  const {localInsightsTitle, localInsightsDescription, levelUrgencyDiagramData, localInsightsDiagramDescription, localInsightsImage} = data;

  const [temperatureWidth, setTemperatureWidth] = useState(481);
  const [scaleWidth, setScaleWidth] = useState(423);

  const getResizeWidth = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 620) {
      setTemperatureWidth(341);
      setScaleWidth(300);  
    } else if (typeof window !== 'undefined' && window.screen.width > 620) {
      setTemperatureWidth(481);
      setScaleWidth(423);  
    } 
  };

  useEffect(() => {
    getResizeWidth();
    if (window) {
      const listener = window.addEventListener('resize', getResizeWidth);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const valueWidth = scaleWidth * levelUrgencyDiagramData / 10 + (temperatureWidth-scaleWidth) / 2;

  return (
    <section className="lektion">
         <div className="lektion__imgbox">
           <Image className="lektion__img" src={getImg(localInsightsImage)} alt="img" layout="fill" priority />
        </div>
        <div className="lektion__center">
        
        <div className="lektion__content">
          <h2 className="lektion__title">{localInsightsTitle}</h2>
          <p className="lektion__description">{localInsightsDescription}</p>
          <div className="lektion__diagram">
          <div className="lektion__diagram--title">Level of urgency</div>
          <div className="lektion__diagram--image">
            <div className="lektion__temperature">
              <div className="lektion__value" style={{width: `${valueWidth}px`}}></div>
            </div>            
            <div className="lektion__scale"></div>
          </div>
          <div className="lektion__diagram--data" style={{paddingLeft: `${valueWidth - 10}px`}}>
            <div className="lektion__diagram--number">{levelUrgencyDiagramData}</div>
            <div className="lektion__diagram--description">{localInsightsDiagramDescription}</div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default LocalInsights;
