const body = document.querySelector('body');
const checkbox = document.querySelector('.darkModeCheckbox');


function update(bgColor, textColor) {
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
}

checkbox.addEventListener("click", darkMode);

function darkMode() {
    if (checkbox.checked) {
    update('rgb(30, 30, 30)','#f2f6f7');
  }  else {
    update('white','rgb(50, 50, 50)');
  }  
}
