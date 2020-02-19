export default (timeInMilliSeconds)=>{
    let min = Math.floor((timeInMilliSeconds/1000/60));
    let sec = Math.floor((timeInMilliSeconds/1000) % 60);

    return `${min}:${sec}`;
}