import React from 'react';

class Logger extends React.Component{
    
    render(){
        return(
            <div className="logger">
                <div className="logger__inputWrap logger__inputWeightWrap">
                    <label>kg</label>
                    <input className="logger__input" type='number' placeholder="KG" min="1" max="1000" defaultValue={props.weight} readOnly/>
                </div>
                <div className="logger__inputWrap logger__inputRepsWrap">
                    <label>reps</label>
                    <input className="logger__input" type="number" placeholder="REPS" min="1" max="999"/>
                </div>
                <div className="logger__inputWrap logger__inputTimeWrap">
                    <label>time</label>
                    <input className="logger__input" type="number" placeholder="time" min="1" max="999"/>
                </div>
                <div className="logger__inputWrap logger__submitButton">
                    <i className="fas fa-check"></i>
                </div>
            </div>
        )
    }
}

export default Logger;