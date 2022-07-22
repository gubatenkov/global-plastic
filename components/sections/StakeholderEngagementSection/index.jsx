import getImg from '../../../utils/getImg'

const StakeholderEngagementSection = ({data}) => {
  const {stakeholderEngagementTitle, stakeholderEngagementDescription, stakeholderEngagementData1, stakeholderEngagementData1Description, stakeholderEngagementData2, stakeholderEngagementData2Description, stakeholderEngagementData3, stakeholderEngagementData3Description, stakeholderEngagementData4, stakeholderEngagementData4Description, stakeholderEngagementData5, stakeholderEngagementData5Description, stakeholderEngagementImage1, stakeholderEngagementImage2} = data;

  return (
    <section className="sesktion">
      <div className="sesktion__center">
        <div className="sesktion__content">
          <h2 className="sesktion__title">{stakeholderEngagementTitle}</h2>
          <p className="sesktion__description">{stakeholderEngagementDescription}</p>
        </div>
        <div className="sesktion__container">
          <div className="sesktion__shapes-container">
            <div className="sesktion__shape1">
              <div className="sesktion__data1">{stakeholderEngagementData1}</div>
              <p className="sesktion__description1">{stakeholderEngagementData1Description}</p>
            </div>
            <div className="sesktion__shape2">
              <div className="sesktion__data2">{stakeholderEngagementData2}</div>
              <p className="sesktion__description2">{stakeholderEngagementData2Description}</p>
            </div>
            <div className="sesktion__shape3">
              <div className="sesktion__data3">{stakeholderEngagementData3}</div>
              <p className="sesktion__description3">{stakeholderEngagementData3Description}</p>
            </div>
            <div className="sesktion__shape4">
              <div className="sesktion__data4">{stakeholderEngagementData4}</div>
              <p className="sesktion__description4">{stakeholderEngagementData4Description}</p>
            </div>
            <div className="sesktion__shape5">
              <div className="sesktion__data5">{stakeholderEngagementData5}</div>
              <p className="sesktion__description5">{stakeholderEngagementData5Description}</p>
            </div>
            <div className="sesktion__shape1img" style={{backgroundImage: `url('${getImg(stakeholderEngagementImage1)}')`}} >
            </div>
            <div className="sesktion__shape2img" style={{backgroundImage: `url('${getImg(stakeholderEngagementImage2)}')`}} >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderEngagementSection;
