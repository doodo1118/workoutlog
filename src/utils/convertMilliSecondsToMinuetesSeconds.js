export default (timeInMilliSeconds)=>{
    let min = Math.floor((timeInMilliSeconds/1000/60));
    let sec = Math.floor((timeInMilliSeconds/1000) % 60);

    return `${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`;
}