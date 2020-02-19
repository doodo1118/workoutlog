import React from 'react';
import Log from './log';

class LogsContainer extends React.Component{
    render(){
        console.log('logsContainer props : ', this.props);
        const {logs, onDone} = this.props;
        const logComponents = logs.map((log, index)=><Log log={log} key={index}/>);

        return(
            <div ref={(ref)=>this.LogsContainer=ref} className="partner__logsContainer logsContainer">
                {logComponents}
            </div>
        )
    }
}

export default LogsContainer;