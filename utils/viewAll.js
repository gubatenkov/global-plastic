const viewAll = (event, fn) => {
  const button = event.target;
  const wrapper = event.target.previousElementSibling;
  const cards = wrapper.firstElementChild;

  if(wrapper.offsetHeight === cards.offsetHeight && 
    !wrapper.classList.contains('full')) {
    return
  }  
  if(wrapper.classList.contains('full')) {
    wrapper.classList.remove('full');
    button.textContent = 'View all';
    fn();
  } else {
    wrapper.classList.add('full');
    button.textContent = 'Close';
  }
}

export default viewAll;
