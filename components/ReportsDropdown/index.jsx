import { useState, useEffect, useRef } from 'react';

const data = ["Latin America", "Middle East", "South-East Asia", "Australia & Oceaniar"];

const ReportsDropdown = ({dropdownName, dropdownData, transferData}) => {

  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dropdown = useRef(null);
  useEffect(() => {
    const onClick = e => dropdown.current.contains(e.target) || setOpen(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  
  const toggleDropdown = () => {
    setOpen(!isOpen);    
  };
  
  const handleItemClick = (event) => {
    const id = event.target.id;
    const items = Array.from(event.target.parentElement.children);
    const header = event.target.parentElement.previousElementSibling;

    items.forEach(item => item.classList.remove("checked"));
    event.target.classList.add("checked");
    header.classList.add("checked");
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div className='dropdown' ref={dropdown}>
      <div className='dropdown__header' onClick={toggleDropdown}>
        {selectedItem ? dropdownData[selectedItem] : dropdownName.replace('report', '')}
        <i className={`dropdown__icon ${isOpen && "open"}`}></i>   
      </div>
      <div className={`dropdown__body ${isOpen && 'open'}`}>
        {dropdownData.map((item, index) => (
          <div className="dropdown__item" id={index} key={index}
            onClick={(event) => {
              handleItemClick(event);
              transferData(event, dropdownData, dropdownName);}}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReportsDropdown;
