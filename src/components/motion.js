import React from 'react';

function Motion({motionName, popMotionSearch}){
    return(
        <div className="motion">
            <div className="motion__name" onClick={popMotionSearch}>{motionName}</div>
            
            {/*  */}
            <div>
                {/*  */}
                <div className="">
                    <div className="search"></div>
                    <div className="filter">
                        {/* 운동 종류별 */}
                        <div className="category1">
                            <div>스트레칭</div>
                            <div>웨이트트레이닝</div>
                            <div>유산소</div>
                            <div>즐겨찾기</div>
                        </div>
                        {/* 웨이트 부위별 */}
                        <div className="category2">
                            <div>등</div>
                            <div>가슴</div>
                            <div>복근</div>
                            <div>bookmark</div>
                        </div>
                    </div>
                </div>
                {/* 검색결과 */}
                <div className="">
                    
                </div>
            </div>
            {/*  */}
        </div>
    )
}   

export default Motion;