const participationAnimation = (percent, icon) => {
  const number = icon.current.firstElementChild;   
  if(percent > -30 && percent < 10) {
    icon.current.style.transform = 'scale(1)';
    icon.current.style.opacity = '1';
    number.style.display = 'block';
  } else if(percent > 50 && percent < 85) {
    icon.current.style.transform = 'scale(25)';
    icon.current.style.opacity = '.5';
    number.style.display = 'none';
  } else if(percent < -30 || percent > 85) {
    icon.current.style.transform = 'scale(.1)';
    icon.current.style.opacity = '1';
    number.style.display = 'block';
  }       
}

export default participationAnimation;