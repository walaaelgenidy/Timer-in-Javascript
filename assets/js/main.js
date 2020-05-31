let timer ; 
let sec = 0 ;
let min = 0 ;
let hour = 0 ;
    
    let timer_element = document.getElementById("timer");
    let start_btn = document.getElementById("start");
    let stop_btn = document.getElementById("stop");
    let reset_btn = document.getElementById("reset");

    
    start_btn.addEventListener("click" , function(){
        timer = setInterval(TimerHandler , 1000);
        reset_btn.disabled  = true;
    });

    stop_btn.addEventListener("click" , function(){
       timer = clearInterval(timer);
       reset_btn.disabled  = false;

    });

    reset_btn.addEventListener("click" , function(){
        timer = clearInterval(timer);
        reset_btn.disabled  = true;
        sec =0;
        min =0;
        hour = 0 ;
        timer_element.innerHTML = "00:00:00";
    });

 //what would happend every 1 sec
function TimerHandler(){
        sec++;

        if(sec == 60){
            sec = 0;
            min++;
        }
        
        if(min == 60){
            min = 0;
            hour++;
        }
      //  console.log(hour + " : " + min + " : " + sec );
   DisplyTime();
 }

 function  DisplyTime(){
    
     let second = sec < 10 ? `0${sec}` : sec;
     let minute = min < 10 ? `0${min}` : min;
     let hours = hour < 10 ? `0${hour}` : hour;
    
     timer_element.innerHTML = hours + " : " + minute+ " : " + second ;
 }


 