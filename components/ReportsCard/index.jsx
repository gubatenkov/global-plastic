import Image from 'next/image';
import arrowDown from 'assets/images/arrowDown.svg';
import getImg from '../../utils/getImg';
import getFile from '../../utils/getFile';

const ReportsCard = ({ data }) => {
  const {reportCountry, reportFile, reportImage, reportTitle, reportSubTitle, reportRegion} = data;



  return (
    <div className="reports-card">
      <div className="reports-card__imgbox">
        <Image className="reports-card__imgbox__img" src={getImg(reportImage)} alt="img" layout="fill" priority />
      </div>
      <h3 className="reports-card__title">{reportTitle}</h3>
      <p className="reports-card__subtitle">{reportSubTitle}</p>      
      <a href={getFile(reportFile)} download="report.pdf" className="reports-card__link">
        <span className="reports-card__link__span">Download</span>
        <Image src={arrowDown} alt="download" />
      </a>   
    </div>
  );
};

export default ReportsCard;
