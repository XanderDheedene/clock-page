const tdnn = document.getElementById("tdnn");
const moonSun = document.getElementById("moonsun");
const logoImage = document.getElementById('full-logo');

let darkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; //We create an extra variable, rather than using `SaveLoadManager.getData().darkTheme`. Because otherwise the UI of the toggle/button wouldn't update, because Svelte wouldn't know that the state changed
document.documentElement.setAttribute("data-theme", darkTheme ? "dark" : "light"); //This sets the value of the "data-theme" attribute in our html. The values of the color variables we defined in our CSS will be set based on the value of this attribute.
//https://lukelowrey.com/css-variable-theme-switcher/
document.documentElement.style.setProperty("color-scheme", darkTheme ? "dark" : "light"); //This sets the color theme of the html. We might overwrite certain styleclasses/colors etc. But at least this way some stuff will already be in a white/dark theme depending on the selected color-scheme. For example the background color of the page, buttons, scrollbars etc will be changed depending on the color-scheme property's value
if (darkTheme) logoImage.src="./images/logo_dheedene_black.svg";

function toggleTheme() {
    darkTheme = !darkTheme;
    document.documentElement.setAttribute("data-theme", darkTheme ? "dark" : "light");
    document.documentElement.style.setProperty("color-scheme", darkTheme ? "dark" : "light");
    darkTheme ? setTimeout(function(){
        logoImage.src="./images/logo_dheedene_black.svg";
    }, 150) : setTimeout(function(){
        logoImage.src="./images/logo_dheedene_white.svg";
    }, 150); 
    darkTheme ? tdnn.classList.remove("day") : tdnn.classList.add("day");
    darkTheme ? moonSun.classList.remove("sun") : moonSun.classList.add("sun");
}

document.querySelector('#copyrightYear').textContent = new Date().getFullYear().toString();