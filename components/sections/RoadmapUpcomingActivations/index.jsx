import { useState } from 'react';
import { useRouter } from "next/router";

import { RoadmapUpcomingActivationsCard, RoadmapDropdown } from 'components';
import viewAll from '../../../utils/viewAll';

const RoadmapUpcomingActivations = ({ data }) => {
  const router = useRouter();
  const fn = () => router.push("#roadmapUpcoming");

  const regions = [...new Set(data.map(el => el.upcomingActivationsRegion))];
  const countries = [...new Set(data.map(el => el.upcomingActivationsCountry))];

  const [reportRegion, setReportRegion] = useState(null);
  const [reportCountry, setReportCountry] = useState(null);

  const filterData = data.filter(el => reportRegion ? reportRegion.includes(el.reportRegion) : el)
                         .filter(el => reportCountry ? reportCountry.includes(el.reportCountry) : el);

  console.log(regions, countries)

  const roadmapUpcomingActivations = filterData.map((item, index) => {
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

