import getImg from '../../../utils/getImg'

const LocalInsights = ({data}) => {
  const {localInsightsTitle, localInsightsDescription, levelUrgencyDiagramData, localInsightsDiagramDescription, localInsightsImage} = data;

  return (
    <section className="lektion">
        <div className="lektion__center">
        <h2 className="lektion__title">{localInsightsTitle}</h2>
        <h3 className="lektion__description">{localInsightsDescription}</h3>
        <div className="lektion__shape1"></div>
        <div className="lektion__shape2"></div>
        <div className="lektion__shape3"></div>
      </div>
    </section>
  );
};

export default LocalInsights;
