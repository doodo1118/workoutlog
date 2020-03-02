import React from 'react';

//이름 나중에 바꾸는게 좋겠다..
import Log from './Log';

class LogsContainer extends React.Component{
    moveToNext(){
        setTimeout(()=>{
            this.LogsContainer.scrollLeft += 322;
        }, 800)
    }
    render(){
        const {logs} = this.props;
        //partners부터 내려온 logs
        const logComponents = logs.map((log, index)=><Log log={log} key={index}/>);

        return(
            <div ref={(ref)=>this.LogsContainer=ref} className="partner__logsContainer logsContainer">
                {logComponents}
            </div>
        )
    }
}

export default LogsContainer;