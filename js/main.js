console.log('Connected');

let modeToggle = document.querySelector('.toggle');
let state = "ON";

function toggleDarkMode() {
    let pageStyle = document.body;
    pageStyle.classList.toggle("dark-mode");
}

function changeText() {

    if (state == "ON") {
        modeToggle.innerHTML = `<i class="fas fa-lightbulb"></i> Toggle Light Mode`;
        state = "OFF";
    } else {
        modeToggle.innerHTML = `<i class="fas fa-lightbulb"></i> Toggle Dark Mode`;
        state = "ON";
    }

}

function textSize() {
    let selected = document.getElementById("size").value;
    let page = document.body;

    if (selected == "default") {
        page.style.fontSize = "initial";
    } else if (selected == "small") {
        page.style.fontSize = "small";
    } else if (selected == "medium") {
        page.style.fontSize = "medium";
    } else if (selected == "large") {
        page.style.fontSize = "large";
    } else if (selected == "x") {
        page.style.fontSize = "x-large";
    } else if (selected == "xx") {
        page.style.fontSize = "xx-large";
    }

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    button = document.getElementById("top");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

modeToggle.addEventListener('click', changeText);