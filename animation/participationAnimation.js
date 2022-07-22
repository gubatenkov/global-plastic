const participationAnimation = (percent, icon) => {
  const number = icon.current.firstElementChild;   
  if(percent > -40 && percent <= -14) {
    icon.current.style.transform = 'scale(1)';
    number.style.display = 'block';
  } else if(percent > -14 && percent <= 95) {
    icon.current.style.transform = `scale(${1 + (percent + 14) / 100})`;
    icon.current.style.opacity = '1';
    number.style.display = 'block';
  } else if(percent <= -40 || percent > 95) {
    icon.current.style.transform = 'scale(.25)';
    number.style.display = 'block';
  }       
}

export default participationAnimation;