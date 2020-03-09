import React, {useState} from 'react';

import {faCheck, faBookmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function RoutineItem(){
    function onAddClick(){

    }
    function onBookmarkClick(){
        
    }
    return(
        <div className="item">
            <div className="item__content">
                <div className="item__user"></div>
                <div className="item__title"></div>
                <div className="item__detail">
                    <div className="item__target"></div>
                    <div className="item__">
                        <div className="item__time"></div>
                        <div className="item__sets"></div>
                    </div>
                </div>
            </div>
            <div className="item__buttons">
                <div className="item__button item__add item__add_state_active" onClick={onAddClick}>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                <div className="item__button item__bookmark item__bookmark_state_active" onClick={onBookmarkClick}>
                    <FontAwesomeIcon icon={faBookmark}/>
                </div>
            </div>
        </div>
    )
}

export default RoutineItem;