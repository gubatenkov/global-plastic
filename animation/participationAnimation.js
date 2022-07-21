const participationAnimation = (percent, icon) => {      
  if(percent > -40 && percent < 85) {
    icon.current.style.transform = `scale(1)`;
  } else if(percent < -40 || percent > 85) {
    icon.current.style.transform = `scale(.1)`;
  }        
}

export default participationAnimation;