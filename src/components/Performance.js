import React from 'react';

import convertMilliSecondsToMinuetesSeconds from '../utils/convertMilliSecondsToMinuetesSeconds';

function Performance({weight, reps, time, onChange}){
        
    return(
        <div className="performance">
            <div className="performance__inputWrap performance__weightWrap">
                <label>kg</label>
                <input name="weight" className="performance__input" type='number' placeholder="KG" min="1" max="1000" defaultValue={weight} onChange={(e)=>onChange(e)}/>
            </div>
            <div className="performance__inputWrap performance__repsWrap">
                <label>reps</label>
                <input name="reps" className="performance__input" type="number" placeholder="REPS" min="1" max="999" defaultValue={reps} onChange={(e)=>onChange(e)}/>
            </div>
            <div className="performance__inputWrap performance__timeWrap">
                <label>time</label>
                <input name="time" className="performance__input" type="text" placeholder="time" min="1" max="999" defaultValue={convertMilliSecondsToMinuetesSeconds(time)} readOnly/>
            </div>
        </div>
    )
}

export default Performance;