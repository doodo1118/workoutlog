import React from 'react';
import convertMilliSecondsToMinuetesSeconds from '../utils/convertMilliSecondsToMinuetesSeconds';



function Result(props){
    const {myLogs, mainTimer, intervalTimer, totalSets, totalVolume} = props;

    function finishExercise(){

    }
    return(
        <div className="result">
            <div className="result__summary">
                <div className="date">
                    <div className="startedAt">
                        {}
                    </div>
                    <div className="finishedAt">
                        {}
                    </div>
                </div>
                <div className="result__time">
                    {mainTimer}
                </div>
                <div className="result__volume">
                    {totalVolume}
                </div>
                <div className="result__sets">
                    {totalSets}
                </div>
            </div>
            <div className="result__motions">
                PLACE FOR LOGS
                <div className="motion_size_sm motion_chest">
                </div>
            </div>
            <div className="finishButton" onClick={finishExercise}>
                FINISH
            </div>
        </div>
    )
}


export default Result;