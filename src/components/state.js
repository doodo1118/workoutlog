import React from 'react';
import convertMilliSecondsToMinuetesSeconds from '../utils/convertMilliSecondsToMinuetesSeconds';



function State(props){
    const {mainTimer, intervalTimer,startExercise, resetIntervalTimer, tick, setsCount: totalSets, volumeCount: totalVolume} = props;
    function startExercises(){
        startExercise(); setInterval(tick, 1000);
    }
    return(
        <div className="state">
            <div className="state__mainTimer" onClick={startExercises} >
                {convertMilliSecondsToMinuetesSeconds(mainTimer)}
            </div>
            <div className="state__progress">
                <div className="sets__volumeCounter">
                    {totalVolume}
                </div>
                <div className="state__setsCounter">
                    {totalSets}
                </div>
            </div>
            <div className="state__intervalTimer" onClick={resetIntervalTimer}>
                {convertMilliSecondsToMinuetesSeconds(intervalTimer)}
            </div>
        </div>
    )
    
}

// class State extends React.Component{
    
//     render(){
//         return(
//             <div className="state">
//                 <div className="state__totalElapsedTime">{new Date() - this.props.mainTimer}</div>
//                 <div className="state__progress">
//                     <div className="accumulatedVolume"></div>
//                 </div>
//                 <div className="state__intervalTimer">{new Date() - this.props.intervalTimer}</div>
//             </div>
//         )
//     }
// }


export default State;