import React, {useState} from 'react';

function MotionBoard({motionName, popMotionSearch}){
    const [category, setCategory] = useState('weight');
    const [depth, setDepth] = useState(2);
    function decreaseDepth(){
        setDepth(depth-1);
    }
    function increaseDepth(){
        setDepth(depth+1);
    }
    return(
        <div className="motionBoard">
            <div className="filter">
                {/* 운동 종류별 */}
                {depth===1&&
                <div className="motionBoard__categories">
                    <div>WEIGHT</div>
                    <div>유산소</div>
                    <div>CROSS-FIT</div>
                </div>}

                {/* 부위별 */}
                {category==='weight' && depth===2 &&
                <div className="motionBoard__weightParts">
                    <div>SHOULDER</div>
                    <div>BACK</div>
                    <div>BICEPS</div>
                    <div>TRICEPS</div>
                    <div>CHEST</div>
                    <div>ABS</div>
                    <div>BUTT</div>
                    <div>THIGH</div>
                    <div>CARP</div>
                    <div>CORE</div>
                    <div>ETC</div>
                    <div>bookmark</div>
                    <div onClick={decreaseDepth}>back</div>
                    <div>search</div>
                </div>}
                {/* 결과 */}
                {depth===3 &&
                <div className="motionBoard__result">
                    <div className="">
                
                    </div>
                    <div onClick={decreaseDepth}>
                        back
                    </div>
                </div>}    
                {/* 검색 */}
                {depth===4 &&
                <div className="motionBoard__search">
                    <input type="text" placeholder="search" />
                    <div className="">
                    </div>
                    <div onClick={decreaseDepth}>
                        back
                    </div>
                </div>}          
            </div>
            
        </div>
    )
}   

export default MotionBoard;