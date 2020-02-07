import React from 'react';
import {inject} from 'mobx-react';

import Motion from './motion';
import Logger from './logger';


// @inject(store=>{
//     store.
// })
class Log extends React.Component{
    
    render(){
        return(
            <div className="log textShadow log_backgroundColor_normal">
                <Motion motionName={motionName}/>
                <Logger weight={weight} reps={reps}/>
            </div>
        )
    }
}

export default Log;