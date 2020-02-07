import React from 'react';
import {observer, inject} from 'mobx-react';
import Exerciser from './exerciser';

@inject((rootStore)=>({
    exercisers: rootStore.exercisers,

}))
@observer
class Exercisers extends React.Component{
    
    

    render(){
        
        return(
            <div className="exercisers" id="exercisers">
                {exercisers.map(exerciser=>{
                    <Exerciser exerciser={exerciser}/>
                })}
            </div>
        )
    }
}

export default Exercisers;