const toggle = document.getElementById('toggle');
const logoImage = document.getElementById('full-logo');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;
    if (isChecked) {
        body.classList.add('dark-theme');
        setTimeout(function(){
            logoImage.src="./images/logo_dheedene_black.svg";
        }, 150);
    } else {
        body.classList.remove('dark-theme');
        setTimeout(function(){
            logoImage.src="./images/logo_dheedene_white.svg";
        }, 150);
    }
});

document.querySelector('#copyrightYear').textContent = new Date().getFullYear().toString();