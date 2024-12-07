var hrs = document.querySelector(".hours");
var mins = document.querySelector(".mins");
var secs = document.querySelector(".secs");



setInterval(()=>{
    let time = new Date();
 

    hrs.innerHTML= time.getHours();
    mins.innerHTML= time.getMinutes();
    secs.innerHTML = time.getSeconds();


    hrs = hrs <10 ? "0" + hrs : hrs;
    mins = mins<10 ? "0" + mins: mins;
    secs= secs < 10 ? "0" + secs : secs;

  
  

  
},1000)


