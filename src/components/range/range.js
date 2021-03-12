import React from "react";

import {rangeUpdated} from "../actions/range";
import {connect} from "react-redux";

import './range.sass'
import {Slider} from "antd";

const DistanceTracker = (props) => {
    const {steps, value} = props
    const handleChange = e => {
        props.rangeUpdated(e, steps)
    }

    const min = steps[0]
    const max = steps[steps.length - 1];
    return (
        <div className="distance">
            <div className="distance__content">
                <p>Choose <span>Distance</span></p>
                <span className='current-distance'>Current Distance</span>
                <span className='distance-count'>{value}<span className='metrics'>m</span></span>
            </div>
            <Slider value={value} min={min}
                    max={max} onChange={handleChange}/>
                    <span className="min">{min}m</span>
                    <span className="max">{max}m</span>
        </div>
    )
}

const mapStateToProps = ({range: {value}}) => {
    return {
        value
    };
};

const mapDispatchProps = {
    rangeUpdated,
};

export default connect(mapStateToProps, mapDispatchProps)(DistanceTracker);