const userTheme = document.getElementById('link-user-theme');
const lightTheme = document.getElementById('link-light-theme');
const darkTheme = document.getElementById('link-dark-theme');
let currentTheme = document.getElementById('switcher-id');

const radioLightTheme = document.getElementById('light-theme-input');
const radioDarkTheme = document.getElementById('dark-theme-input');
const radioUserTheme = document.getElementById('user-theme-input');


radioLightTheme.addEventListener('click',  (e) => {
  console.log(e);
  setTheme('styles/light-theme.css');
});

radioDarkTheme.addEventListener('click',  (e) => {
  console.log(e);
  setTheme('styles/dark-theme.css');
});

radioUserTheme.addEventListener('click',  (e) => {
  console.log(e);
  setTheme('styles/user-theme.css');
});

function setTheme(href) {
  console.log('setTheme() called! ' + href);
  currentTheme.href = href;
}

