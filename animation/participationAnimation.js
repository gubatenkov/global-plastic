const participationAnimation = (percent, icon) => {
  const number = icon.current.firstElementChild;   
  if(percent > -40 && percent < -14) {
    icon.current.style.transform = 'scale(1)';
    icon.current.style.opacity = '1';
    number.style.display = 'block';
  } else if(percent > -14 && percent < 60) {
    icon.current.style.transform = `scale(${1 + (percent + 14) / 50})`;
    icon.current.style.opacity = '1';
    number.style.display = 'block';
  } else if(percent > 60 && percent < 95) {
    icon.current.style.transform = 'scale(20)';
    icon.current.style.opacity = '.8';
    number.style.display = 'none';
  } else if(percent < -40 || percent > 95) {
    icon.current.style.transform = 'scale(.1)';
    icon.current.style.opacity = '1';
    number.style.display = 'block';
  }       
}

export default participationAnimation;