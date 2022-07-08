import getImg from '../../../utils/getImg'

const StakeholderParticipationSection = ({data}) => {
  const {stakeholderParticipationTitle, stakeholderParticipationDescription, stakeholderParticipationImage, stakeholderParticipationNumber} = data;

  return (
    <section className="spaktion">
        <div className="spaktion__center" style={{backgroundImage: `url('${getImg(stakeholderParticipationImage)}')`}}>
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
