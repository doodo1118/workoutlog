import React, { useState } from 'react';

import Motion from '../Motion';
import Performance from '../Performance';
import Logger from '../Logger';

function Log(props){
    const [isDone, setDone] = useState(false);
    const [motionName, setMotionName] = useState(props.log.motionName);
    const [weight, setWeight] = useState(props.log.weight);
    const [reps, setReps] = useState(props.log.reps);
    const [time, setTime] = useState(props.log.time);

    function markAsCompleted(){
        setDone(true);
    }
    function popMotionSearch(){
        console.log();
    }
    function changeMotion(newMotionName){
        setMotionName(newMotionName);
    }
    function onChangePerformance(e){
        switch(e.currentTarget.name){
            case "weight":
                setWeight(e.currentTarget.value);break;
            case "reps":
                setReps(e.currentTarget.value);break;
            case "time":
                setTime(e.currentTarget.value);break;
            default:
                break;
        }
    }
    
    return(
        <div className={`log textShadow log_backgroundColor_default ${isDone?'log_backgroundColor_done':''}`}>
            <Motion motionName={motionName} popMotionSearch={popMotionSearch} />
            <Performance weight={weight} reps={reps} time={time} onChange={onChangePerformance}/>
            
            {/* 
            지금 Log 컴포넌트 안에 partners로부터 내려온 logs랑 reducer의 myLogs둘다있음.
            그냥 LoggerContainer만들고 state로 motionName이랑 performance 내역 보내주는게 더나을듯?
            myLogs까지 받을 필요 없음. action만 받아오면 됨 
            */}
            <Logger markAsCompleted={markAsCompleted} motionName={motionName} weight={weight} reps={reps} time={time}/>

        </div>
    )
    
}


export default Log;