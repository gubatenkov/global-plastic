import getImg from '../../../utils/getImg';
import { useEffect, useRef } from "react";
import participationAnimation from '../../../animation/participationAnimation'

const StakeholderParticipationSection = ({data}) => {
  const {stakeholderParticipationTitle, stakeholderParticipationDescription, stakeholderParticipationImage, stakeholderParticipationNumber} = data;

  const section = useRef();
  const icon = useRef();

  const getScrollPercent = () => {
    if(!section.current) return;    
    const sectionHeight = section.current.clientHeight;
    const scrollHeight = document.documentElement.scrollTop - section.current.offsetTop;
    const scrollPercent = Math.round(scrollHeight / sectionHeight * 100);  
    const percent = isNaN(scrollPercent) ? "" : scrollPercent;
    return percent;
  }

  useEffect(() => {
    const handleScroll = () => {
      const percent = getScrollPercent();
      participationAnimation(percent, icon);
    }
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, []);

  return (
    <section className="spaktion"  style={{backgroundImage: `url('${getImg(stakeholderParticipationImage)}')`}} ref={section}>
      <div className="spaktion__center">
        <h2 className="spaktion__title">{stakeholderParticipationTitle}</h2>
        <h3 className="spaktion__subtitle">{stakeholderParticipationDescription}</h3>
        <div className="spaktion__shape1" ref={icon}>
          <span className="spaktion__number">
            {stakeholderParticipationNumber}
          </span>
        </div>
        <div className="spaktion__shape2"></div>
        <div className="spaktion__shape3"></div>
      </div>
    </section>
  );
};

export default StakeholderParticipationSection;
