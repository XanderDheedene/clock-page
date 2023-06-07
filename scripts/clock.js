const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const clock = document.getElementById('clock');
const dayDate = document.getElementById('day-date');

function setDate() {
    const ww = window.innerWidth;
    const now = new Date();
    if (ww < 670) {
        clock.innerHTML = `${leading0(now.getHours())}<br>${leading0(now.getMinutes())}<br>${leading0(now.getSeconds())}`;    
    }
    else {
        clock.innerHTML = `${leading0(now.getHours())} : ${leading0(now.getMinutes())} : ${leading0(now.getSeconds())}`;
    }
    dayDate.innerHTML = `${weekday[now.getDay()]} ${leading0(now.getDate())}/${leading0(now.getMonth())}/${now.getFullYear()}`;
}

function leading0(number) {
    return number < 10 ? "0" + number : number;
}
setInterval(setDate, 1000);