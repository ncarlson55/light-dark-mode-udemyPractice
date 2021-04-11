// Toggle Switch
const toggleSwitch = document.querySelector('input[type="checkbox"]');
// Elements in HTML that will change when we switch to dark mode
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Function that handles are dark and light images
const imageMode = function(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode  Functions for Switch Theme Function to call
const darkMode = function() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
};

// Light Mode
const lightMode =  function() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
};

// Switch Theme function
const switchTheme = function (event) {
  if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkMode();
  } else {
      document.documentElement.setAttribute('data-theme', 'light');
      lightMode();
  }
};

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);
