import { useState, useEffect } from 'react';

const data = [{id: 0, label: "Istanbul, TR (AHL)"}, {id: 1, label: "Paris, FR (CDG)"}];

const ReportsDropdown = ({dropdownName}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div className='dropdown'>
      <div className='dropdown__header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : dropdownName}
        <i className={`dropdown__icon ${isOpen && "open"}`}></i>   
      </div>
      <div className={`dropdown__body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div className="dropdown__item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReportsDropdown;
