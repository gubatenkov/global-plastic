import { useEffect, useState } from 'react';

import getImg from '../../utils/getImg';


const RoadmapTreatyItems = ({data, style}) => {
  const {roadmapTreatyTitle, roadmapTreatySubTitle, roadmapTreatyDate, roadmapTreatyDescription, roadmapTreatyImage} = data;
  const {type, left, top, width, mLeft, mTop, mWidth} = style;

  const [isMobile, setMobile] = useState(false);
  const getMobile = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 520) {
      setMobile(true);
    } else if (typeof window !== 'undefined' && window.screen.width > 520) {
      setMobile(false);
    } 
  };

  useEffect(() => {
    getMobile();
    if (window) {
      const listener = window.addEventListener('resize', getMobile);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const itemStyle = {left: isMobile ? `${mLeft}%` : `${left}%`, top: isMobile ? `${mTop}px` : `${top}px`, maxWidth: isMobile ? `${mWidth}px` : `${width}px`};

  return (
    <section className={`rtiktion ${type}`} style={itemStyle}>
      <h3 className={"rtiktion__title"}>{roadmapTreatyTitle}</h3>
      <h4 className={"rtiktion__subtitle"}>{roadmapTreatySubTitle}</h4>
      <p className={"rtiktion__date"}>{roadmapTreatyDate}</p>
      <p className={"rtiktion__description"}>{roadmapTreatyDescription}</p>
      <img src={getImg(roadmapTreatyImage)} alt="image" className={"rtiktion__image"}/>
    </section>
  );

}

export default RoadmapTreatyItems;