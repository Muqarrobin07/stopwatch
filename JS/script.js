let num;
let stop ;
let a;
function stopwatch(){
    num=0
  document.getElementById('timer-field').innerText = ++num ;
    
}
stopwatch()

document.getElementById('start-btn').addEventListener("click",function(){
    stop = setInterval(stopwatch,1000);
    console.log("start")  
})
document.getElementById('stop-btn').addEventListener("click",function(){
    console.log("stop")  
    clearInterval(stop)
})

document.getElementById('stop-btn').addEventListener("click",function(){
    console.log("stop")  
    clearInterval(stop)
})


