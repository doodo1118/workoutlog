import React from 'react';
import LogsContainer from './LogsContainer';

import {faCrosshairs} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Me extends React.Component{
    
    render(){
        const {logs} = this.props;

        return(
            <div className="partner">
                <div className="partner__header">
                    <div className="partner__info">{"Me"}</div>
                    <div className="partner__menuWrap">
                    </div>
                </div>
                <LogsContainer logs={logs}/>
            </div>
        )
    }
}


export default Me;