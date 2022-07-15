import getImg from '../../../utils/getImg'

const StakeholderParticipationSection = ({data}) => {
  const {stakeholderParticipationTitle, stakeholderParticipationDescription, stakeholderParticipationImage, stakeholderParticipationNumber, stakeholderParticipationCountry, stakeholderParticipationFlag} = data;

  return (
    <section className="spaktion" style={{backgroundImage: `url('${getImg(stakeholderParticipationImage)}')`}}>
      <div className="spaktion__center">
        <div className="spaktion__country">
          <div className="spaktion__flag" style={{backgroundImage: `url('${getImg(stakeholderParticipationFlag)}')`}}></div>
          <div className="spaktion__bg">{stakeholderParticipationCountry}</div>
        </div>
        <h2 className="spaktion__title">{stakeholderParticipationTitle}</h2>
        <h3 className="spaktion__subtitle">{stakeholderParticipationDescription}</h3>
        <div className="spaktion__shape1">{stakeholderParticipationNumber}</div>
        <div className="spaktion__shape2"></div>
        <div className="spaktion__shape3"></div>
      </div>
    </section>
  );
};

export default StakeholderParticipationSection;
