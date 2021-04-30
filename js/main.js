// PRELOADER START //
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
  }, 500);
}
// PRELOADER END //

// SWITCHER FOR INPUTS START //
const lightTheme = document.querySelector('#lightTheme');
const darkTheme = document.querySelector('#darkTheme');
const backendlessTheme = document.querySelector('#backendlessTheme');

lightTheme.addEventListener('click',(e)=>{
  document.documentElement.setAttribute('theme', 'light');
})
darkTheme.addEventListener('click',(e)=>{
  document.documentElement.setAttribute('theme', 'dark')
})
backendlessTheme.addEventListener('click',(e)=>{
  document.documentElement.setAttribute('theme', 'back');
})
// SWITCHER FOR INPUTS END //

// SWITCHER FOR BUTTONS START //
const lightButton = document.querySelector('#lightButton');
const darkButton = document.querySelector('#darkButton');
const backButton = document.querySelector('#backButton');

lightButton.addEventListener('click',(e)=>{
  document.documentElement.setAttribute('theme', 'light');
})
darkButton.addEventListener('click',(e)=>{
  document.documentElement.setAttribute('theme', 'dark')
})
backButton.addEventListener('click',(e)=>{
  document.documentElement.setAttribute('theme', 'back');
})
// SWITCHER FOR BUTTONS END //

// SWITCHER FOR SELECT START //
function selection () {
  var choice = select.value;
  switch (choice) {
    case 'lightTheme':
      document.documentElement.setAttribute('theme', 'light');
      break;
    case 'darkTheme':
      document.documentElement.setAttribute('theme', 'dark');
      break;
    case 'backTheme':
      document.documentElement.setAttribute('theme', 'back');
      break;
  }
}
// SWITCHER FOR SELECT END //


