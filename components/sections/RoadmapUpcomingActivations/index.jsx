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
  const [isViewAll, setViewAll] = useState(false);
  const [filterDataLength, setfilterDataLength] = useState(2);

  const filterData = data.filter(el => reportRegion ? reportRegion.includes(el.upcomingActivationsRegion) : el)
                         .filter(el => reportCountry ? reportCountry.includes(el.upcomingActivationsCountry) : el);

  const roadmapUpcomingActivations = filterData.map((item, index) => {
    return <RoadmapUpcomingActivationsCard key={index} data={item} />
  });

  const wrapperHeight = {height: isViewAll ? '100%' : filterDataLength > 1 ? '866px' : '420px'};

  const transferFilter = (event, dropdownData, dropdownName) => {
    const items = Array.from(event.target.parentElement.children);    
    const selectedItems = items.filter(el => el.classList.contains("checked"))
                               .map(el => dropdownData[el.id]);      
    if(dropdownName === 'reportCountry') {
      setReportCountry(selectedItems);
      setfilterDataLength(filterData.length);
    } 
    if(dropdownName === 'reportRegion') {      
      setReportRegion(selectedItems);
      setfilterDataLength(filterData.length);
    }
  }

  const resetFilter = (dropdownName) => {
    if(dropdownName === 'reportRegion') {      
      setReportRegion(null);
      setfilterDataLength(2);
    } else if(dropdownName === 'reportCountry') {
      setReportCountry(null);
      setfilterDataLength(2);
    } 
  }

  return (
    <section className="ruaektion">
      <div className="ruaektion__center" id="roadmapUpcoming">
        <div className="ruaektion__header">
          <h2 className="ruaektion__title">Upcoming Activations</h2>
          <div className="ruaektion__container">
              <RoadmapDropdown dropdownName='reportRegion' dropdownData={regions} transferFilter={transferFilter} resetFilter={resetFilter} />
              <RoadmapDropdown dropdownName='reportCountry' dropdownData={countries} transferFilter={transferFilter} resetFilter={resetFilter}/>
            </div>
          </div>
          <div className="ruaektion__wrapper" style={wrapperHeight}>
            <div className="ruaektion__cards">
              {roadmapUpcomingActivations}
            </div>
          </div>
          <button className="cpection__button" 
            onClick={(event) => {viewAll(event, fn); setViewAll((isViewAll) => !isViewAll)}}>
            View all
          </button>
        </div>
    </section>
  );
};

export default RoadmapUpcomingActivations;

