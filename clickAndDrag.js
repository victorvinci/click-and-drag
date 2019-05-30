const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return; //stop function
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const moveX = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - moveX;
});


//TOUCH
slider.addEventListener('touchstart', (e) => {
  e.preventDefault();
  isDown = true;
  slider.classList.add('active');
  startX = e.targetTouches[0].pageX - e.target.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('touchend', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('touchmove', (e) => {
  if(!isDown) return; //stop function
  e.preventDefault();
  const x = e.targetTouches[0].pageX - e.target.offsetLeft;
  const moveX = (x - startX);
  slider.scrollLeft = scrollLeft - moveX;
});