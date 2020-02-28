const html = document.querySelector('html');


function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

function darkMode() {
    if (document.querySelector('.darkModeCheckbox').checked) {
    update('rgb(30, 30, 30)','#f2f6f7');
  }  else {
    update('white','rgb(50, 50, 50)');
  }  
}
