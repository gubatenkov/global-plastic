import getImg from '../../utils/getImg'

const RoadmapTreatyItems = ({data}) => {
  const {roadmapTreatyTitle, roadmapTreatySubTitle, roadmapTreatyDate, roadmapTreatyDescription, roadmapTreatyImage} = data;

  return (
    <section className="rtiktion">
      <h3>{roadmapTreatyTitle}</h3>
      <h4>{roadmapTreatySubTitle}</h4>
      <p>{roadmapTreatyDate}</p>
      <p>{roadmapTreatyDescription}</p>
      <img src={getImg(roadmapTreatyImage)} alt="" />
    </section>
  );

}

export default RoadmapTreatyItems;