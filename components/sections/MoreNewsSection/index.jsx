import { useState } from 'react';

import { ActionCard, ReportsDropdown } from 'components';

export default function MoreNewsSection({
  data: { actionSlider = [], title },
}) {
  const [actionRegion, setActionRegion] = useState(null);
  const [actionCountry, setActionCountry] = useState(null);
  const [items, setItems] = useState(actionSlider.slice(0, 6));
  const [isBtnVisible, setBtnVisible] = useState(actionSlider?.length > 6);

  const filterData = (items) => {
    const filtered = items
      .filter((el) =>
        actionRegion ? actionRegion.includes(el.actionRegion) : el
      )
      .filter((el) =>
        actionCountry ? actionCountry.includes(el.actionCountry) : el
      );
    return filtered;
  };

  const regions = [
    ...new Set(
      actionSlider
        .filter((el) => 'actionRegion' in el)
        .map((obj) => obj.actionRegion)
    ),
  ];

  const countries = [
    ...new Set(
      actionSlider
        .filter((el) => 'actionCountry' in el)
        .map((obj) => obj.actionCountry)
    ),
  ];

  const transferFilter = (event, dropdownData, dropdownName) => {
    const items = Array.from(event.target.parentElement.children);
    const selectedItems = items
      .filter((el) => el.classList.contains('checked'))
      .map((el) => dropdownData[el.id]);
    if (dropdownName === 'reportCountry') {
      setActionCountry(selectedItems);
    }
    if (dropdownName === 'reportRegion') {
      setActionRegion(selectedItems);
    }
  };

  const resetFilter = (dropdownName) => {
    if (dropdownName === 'reportRegion') {
      setActionRegion(null);
    } else if (dropdownName === 'reportCountry') {
      setActionCountry(null);
    }
  };

  const handleLoadMore = () => {
    setItems(actionSlider);
    setBtnVisible(false);
  };

  return (
    <section className="monection">
      <div className="container">
        <div className="monection__inner">
          <div className="monection__header">
            <h2 className="monection__title">{title}</h2>
            <div className="monection__nav">
              <ReportsDropdown
                dropdownName="reportRegion"
                dropdownData={regions}
                transferFilter={transferFilter}
                resetFilter={resetFilter}
              />
              <ReportsDropdown
                dropdownName="reportCountry"
                dropdownData={countries}
                transferFilter={transferFilter}
                resetFilter={resetFilter}
              />
            </div>
          </div>
          <div className="monection__cards">
            {items?.length &&
              filterData(items).map((item, idx) => {
                return <ActionCard key={idx} data={item} />;
              })}
          </div>
          {isBtnVisible && (
            <button className="monection__loadmore" onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
