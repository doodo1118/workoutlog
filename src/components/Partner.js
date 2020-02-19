import React from 'react';
import LogsContainer from './LogsContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCrosshairs} from '@fortawesome/free-solid-svg-icons';

class Partner extends React.Component{
    
    render(){
        const {userId, logs} = this.props.partner;

        return(
            <div className="partner">
                <div className="partner__header">
                    <div className="partner__info">{userId}</div>
                    <div className="partner__menuWrap">
                        <div className="partner__menu partner__sync"><FontAwesomeIcon icon={faCrosshairs}/></div>
                    </div>
                </div>
                <LogsContainer logs={logs}/>
            </div>
        )
    }
}

export default Partner;