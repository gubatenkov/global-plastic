import Image from 'next/image';
import arrowDown from 'assets/images/arrowDown.svg';
import getImg from '../../utils/getImg';
import getFile from '../../utils/getFile';

const ReportsCard = ({ data }) => {
  const {reportCountry, reportFile, reportImage, reportTitle, reportSubTitle, reportRegion} = data;

  const onSubmit = async (event) => {
    event.preventDefault();

    const url = getFile(reportFile);
    await fetch(url, {
      method: 'GET'
  }).then(resp => resp.blob())
      .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = "report.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div className="reports-card">
      <div className="reports-card__imgbox">
        <Image className="reports-card__imgbox__img" src={getImg(reportImage)} alt="img" layout="fill" priority />
      </div>
      <h3 className="reports-card__title">{reportTitle}</h3>
      <p className="reports-card__subtitle">{reportSubTitle}</p>
      <form onSubmit={onSubmit}><input type="submit" value="Download" className="reports-card__download" /></form>
    </div>
  );
};

export default ReportsCard;
