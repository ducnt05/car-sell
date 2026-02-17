function updateClock(){
    var now = new Date();
    var hours = String(now.getHours()).padStart(2,"0");
    var minutes = String(now.getMinutes()).padStart(2,"0");
    var seconds = String(now.getSeconds()).padStart(2,"0");
    document.getElementById("clock").innerText = hours + ":" + minutes + ":" + seconds; 
}
updateClock();
setInterval(updateClock,1000);
