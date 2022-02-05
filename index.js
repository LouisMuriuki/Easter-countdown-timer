const easter="14 April 2022"
const Days=document.querySelector("#days")
const Hours=document.querySelector("#hours")
const Minutes=document.querySelector("#minutes")
const Seconds=document.querySelector("#seconds")
function countdown() {
    const easterDate=new Date(easter) 
    const today=new Date()
    const diff=(easterDate-today)/1000
    let days=Math.floor((diff)/3600/24)
    let hours=Math.floor((diff)/3600 % 24)
    let minutes=Math.floor((diff)/60 % 60)
    let seconds=Math.floor((diff)%60)
    console.log(days, hours, minutes, seconds)
    Days.innerHTML=formattime(days)
    Hours.innerHTML=formattime(hours)
    Minutes.innerHTML=formattime(minutes)
    Seconds.innerHTML=formattime(seconds)

}
function formattime(time){
    return time<10 ? `0${time}`: time

}
countdown();
 setInterval(countdown, 1000)