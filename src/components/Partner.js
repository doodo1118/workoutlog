import React from 'react';
import LogsContainer from './LogsContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCrosshairs} from '@fortawesome/free-solid-svg-icons';

function Partner({partner}){
    
    const {routineId, userId, logs} = partner;

    console.log('routineId', routineId);
    return(
        <div className="partner" id={ `${routineId}` }>
            <div className="partner__header">
                <div className="partner__info">{userId}</div>
                <div className="partner__menuWrap">
                    <div className="partner__menu partner__sync"></div>
                </div>
            </div>
            <LogsContainer logs={logs}/>
        </div>
    )
}
export default Partner;
