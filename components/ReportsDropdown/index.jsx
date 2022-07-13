import { useState, useEffect, useRef } from 'react';

const data = ["Latin America", "Middle East", "South-East Asia", "Australia & Oceaniar"];

const ReportsDropdown = ({dropdownName, dropdownData}) => {

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
  
  const handleItemClick = (e, id) => {
    const items = Array.from(e.target.parentElement.children);
    const header = e.target.parentElement.previousElementSibling;
    items.forEach(item => item.classList.remove("checked"));
    e.target.classList.add("checked");
    header.classList.add("checked");
    console.log(e.target.parentElement.previousElementSibling);
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div className='dropdown' ref={dropdown}>
      <div className='dropdown__header' onClick={toggleDropdown}>
        {selectedItem ? dropdownData[selectedItem] : dropdownName}
        <i className={`dropdown__icon ${isOpen && "open"}`}></i>   
      </div>
      <div className={`dropdown__body ${isOpen && 'open'}`}>
        {dropdownData.map((item, index) => (
          <div className="dropdown__item" id={index} key={index}
          onClick={e => handleItemClick(e, e.target.id)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReportsDropdown;
