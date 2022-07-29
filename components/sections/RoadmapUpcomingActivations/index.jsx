import { RoadmapUpcomingActivationsCard } from 'components';
import { useRouter } from "next/router";
import viewAll from '../../../utils/viewAll';

const RoadmapUpcomingActivations = ({ data }) => {
  const router = useRouter();
  const fn = () => router.push("#roadmapUpcoming");

  const roadmapUpcomingActivations = data.map((item, index) => {
    return <RoadmapUpcomingActivationsCard key={index} data={item} />
  });

  return (
    <section className="ruaektion">
      <div className="ruaektion__center" id="roadmapUpcoming">
        <h2 className="ruaektion__title">Upcoming Activations</h2>
          <div className="ruaektion__wrapper">
            <div className="ruaektion__cards">
              {roadmapUpcomingActivations}
            </div>
          </div>
          <button className="cpection__button" onClick={(event) => viewAll(event, fn)}>View all</button>
        </div>
    </section>
  );
};

export default RoadmapUpcomingActivations;

