import React from 'react';
import Log from './log';

class LogsContainer extends React.Component{
    logs = [];
    
    render(){
        return(
            <div className="exerciser__logsContainer logsContainer">
                {this.logs.map( (log, index)=>
                    <Log key={index} motionName={log.motionName} weight={log.weight} reps={log.reps} time={log.time} />)}
            </div>
        )
    }
}

export default LogsContainer;