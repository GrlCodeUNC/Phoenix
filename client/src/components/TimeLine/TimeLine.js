import React, { Component } from "react";
import './TimeLine.css';
import HorizontalTimeline from "react-horizontal-timeline";

const TimeLine = props =>

<div>
    {/* Bounding box for the Timeline */}
        <div style={{ width: '90%', height: '80px', margin: '0 auto' }}>
            <HorizontalTimeline
                index={ 0 }
                indexClick={(index) => {
                    console.log(props.dates);
                }}
                labelWidth={ 120 }
                values={ props.dates } />
        </div>
        <div className='is-size-5 has-text-danger has-text-centered'>
            Get Busy Living ... Phoenix Style!
        </div>
</div>
    
export default TimeLine;