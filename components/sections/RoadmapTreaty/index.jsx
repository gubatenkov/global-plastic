import {RoadmapTreatyItems} from 'components';

const RoadmapTreaty = ({data}) => {
  const {roadmapTreatyTitle, roadmapTreatyDescription, roadmapTreatyItems} = data;

  const roadmapItems = roadmapTreatyItems.map((item, index) => 
     <RoadmapTreatyItems data={item} key={index} />
  )

  return (
    <section className="rtektion">
      <div className="rtektion__center">
        <h2 className="rtektion__title">{roadmapTreatyTitle}</h2>
        <p className="rtektion__description">{roadmapTreatyDescription}</p>
        {roadmapItems}
      </div>
    </section>
  );
};

export default RoadmapTreaty;
