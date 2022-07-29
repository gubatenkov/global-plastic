import { useState, useEffect, useRef } from 'react';

const RoadmapDropdown = ({dropdownName, dropdownData, transferFilter, resetFilter}) => {

  const [isOpen, setOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const dropdown = useRef(null);
  useEffect(() => {
    const onClick = e => dropdown.current.contains(e.target) || setOpen(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  
  const toggleDropdown = () => {
    setOpen(!isOpen);
  };
  
  const handleItemClick = (event, dropdownName) => {
    const id = event.target.id;
    const selectedItem = dropdownName === "reportRegion" ? selectedRegion : selectedCountry;
    const setSelectedItem = dropdownName === "reportRegion" ? setSelectedRegion : setSelectedCountry;

    selectedItem.includes(id) ? event.target.classList.remove("checked") : event.target.classList.add("checked");

    const items = Array.from(event.target.parentElement.children);
    const selectedItems = items.filter(el => el.classList.contains("checked")).map(el => el.id);
    setSelectedItem(selectedItems);

    const header = event.target.parentElement.previousElementSibling;    
    selectedItems.length === 0 ? header.classList.remove("checked") : header.classList.add("checked");
  }

  const handleResetClick = (event, dropdownName) => {    
    setOpen(false);

    const setSelectedItem = dropdownName === "reportRegion" ? setSelectedRegion : setSelectedCountry;
    setSelectedItem([]);

    const items = Array.from(event.target.parentElement.children);
    const header = event.target.parentElement.previousElementSibling;

    items.forEach(item => item.classList.remove("checked"));
    header.classList.remove("checked");
  }
  
  return (
    <div className='dropdown' ref={dropdown}>
      <div className='dropdown__header' onClick={toggleDropdown}>
        <span>{dropdownName.replace('report', '')}</span>
        <i className={`dropdown__icon ${isOpen && "open"}`}></i>   
      </div>
      <div className={`dropdown__body ${isOpen && 'open'}`}>
        {dropdownData.map((item, index) => (
          <div className="dropdown__item" id={index} key={index}
            onClick={(event) => {
              handleItemClick(event, dropdownData, dropdownName);
              transferFilter(event, dropdownData, dropdownName);              
              }}>
            {item}
          </div>          
        ))}
        <div className="dropdown__reset" 
          onClick={(event) => {
            toggleDropdown();
            handleResetClick(event, dropdownName);
            resetFilter(dropdownName);}}>
            Reset filter
        </div>
      </div>
    </div>
  )
}

export default RoadmapDropdown;
