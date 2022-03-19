const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText=`${hours}:${minutes}:${seconds}`;   
}

// setInterval(sayHello,5000); //뒤에 지정한 ms초마다 호출하는 함수 
// setTimeout(sayHello,5000); //뒤에 지정한 ms초에 한번만 호출


getClock();
setInterval(getClock,1000);