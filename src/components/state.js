import React from 'react';
import convertMilliSecondsToMinuetesSeconds from '../utils/convertMilliSecondsToMinuetesSeconds';

function State(props){
    const {mainTimer, intervalTimer} = props;
        
    return(
        <div className="state">
            <div className="state__mainTimer">
                {convertMilliSecondsToMinuetesSeconds(mainTimer)}
            </div>
            <div className="state__progress">
                <div className="accumulatedVolume"></div>
            </div>
            <div className="state__intervalTimer">
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