import React, { useState } from 'react';
import convertMilliSecondsToMinuetesSeconds from '../utils/convertMilliSecondsToMinuetesSeconds';



function Plan(props){
    const {partnersData, startExercise, tick, totalVolume, totalSets, totalTime} = props;
    
    //state component랑 중복
    function startExercises(){
        startExercise(); setInterval(tick, 1000);
        setDisplay("none");
    }
    const[plannedTime, setPlannedTime] = useState(totalTime);
    const[plannedVolume, setPlannedVolume] = useState(totalVolume);
    const[plannedSets, setPlannedSets] = useState(totalSets);
    const[display, setDisplay] = useState();
    
    
    return(
        <div className="plan" style={ {display: display} }>
            <div className="plan__summary">
                <div className="plan__time">
                    {plannedTime}
                </div>
                <div className="plan__volume">
                    {plannedVolume}
                </div>
                <div className="plan__sets">
                    {plannedSets}
                </div>
            </div>
            <div className="plan__motions">
                PLACE FOR LOGS
                <div className="motion_size_sm motion_chest">
                </div>
            </div>
            <div className="startButton" onClick={startExercises}>
                START
            </div>
        </div>
    )
    
}


export default Plan;