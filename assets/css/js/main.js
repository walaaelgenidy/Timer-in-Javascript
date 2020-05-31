let timer = setInterval(TimerHandler , 1000);
let sec = 0 ;
let min = 0 ;
let hour = 0 ;


 //what would happend every 1 sec
function TimerHandler(){
        sec++;

        if(sec == 60){
            sec = 0;
            min++;
        }
        if(min == 0){
            min = 0;
            hour++;
        }
        console.log(hour + " : " + min + " : " + sec );

 }

 