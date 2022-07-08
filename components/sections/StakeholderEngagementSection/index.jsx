import getImg from '../../../utils/getImg'

const StakeholderEngagementSection = ({data}) => {
  const {stakeholderEngagementTitle, stakeholderEngagementDescription, stakeholderEngagementData1, stakeholderEngagementData1Description, stakeholderEngagementData2, stakeholderEngagementData2Description, stakeholderEngagementData3, stakeholderEngagementData3Description, stakeholderEngagementData4, stakeholderEngagementData4Description, stakeholderEngagementData5, stakeholderEngagementData5Description, stakeholderEngagementImage1, stakeholderEngagementImage2} = data;

  return (
    <section className="sesktion">
      <div className="sesktion__center">
        <h2 className="sesktion__title">{stakeholderEngagementTitle}</h2>
        <p className="sesktion__description">{stakeholderEngagementDescription}</p>
        <div className="staktion__container">
          {/* <div className="staktion__shape1">
            <div className="staktion__data1">{stakeholderEngagementData1}</div>
            <p className="staktion__description1">{stakeholderEngagementData1Description}</p>
          </div>
          <div className="staktion__shape2">
            <div className="staktion__data2">{stakeholderEngagementData2}</div>
            <p className="staktion__description2">{stakeholderEngagementData2Description}</p>
          </div>
          <div className="staktion__shape3">
            <div className="staktion__data3">{stakeholderEngagementData3}</div>
            <p className="staktion__description3">{stakeholderEngagementData3Description}</p>
          </div>
          <div className="staktion__shape4">
            <div className="staktion__data4">{stakeholderEngagementData4}</div>
            <p className="staktion__description4">{stakeholderEngagementData4Description}</p>
          </div>
          <div className="staktion__shape5">
            <div className="staktion__data5">{stakeholderEngagementData5}</div>
            <p className="staktion__description5">{stakeholderEngagementData5Description}</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default StakeholderEngagementSection;
