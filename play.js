setInterval(() => {
    document.getElementById("hour").innerText=new Date().getHours()
    document.getElementById("min").innerText=new Date().getMinutes()
    document.getElementById("second").innerText=new Date().getSeconds()
}, 1000);