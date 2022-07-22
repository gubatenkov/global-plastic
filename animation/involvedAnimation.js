const involvedAnimation = (percent, icon) => {      
  if(percent <= 5 || percent > 90) {
    icon.current.firstElementChild.style.display = 'block';
    icon.current.style.transform = `scale(1)`;
    icon.current.style.top = `110px`;
    icon.current.style.maxHeight = `44px`;
  } else if(percent > 5 && percent <= 45) {
    icon.current.firstElementChild.style.display = 'none';
    icon.current.style.transform = `scale(${percent/2})`;
    icon.current.style.top = 110 + percent * 6 + 'px';
    icon.current.style.maxHeight = `44px`;
  } else if(percent > 45 && percent <= 75) {
    icon.current.firstElementChild.style.display = 'none';
    icon.current.style.transform = `scale(${percent/1.2}) translateX(4%)`;
    icon.current.style.top = 110 + percent * 4 + 'px';
    icon.current.style.maxHeight = `30px`;
  } else if(percent > 75 && percent <= 90) {
    icon.current.firstElementChild.style.display = 'none';
    icon.current.style.transform = `scale(${percent/1.2}) translateX(4%)`;
    icon.current.style.top = 110 + percent * 4 + 'px';
    icon.current.style.maxHeight = `20px`;
  }        
}

export default involvedAnimation;