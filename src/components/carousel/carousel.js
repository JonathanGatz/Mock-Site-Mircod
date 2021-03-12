import React from 'react'

import {openModal} from "../actions/modal";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Slider from "react-slick";
import { Input, Select } from 'antd';
import './carousel.sass'

import sun from "../../img/temp-sun.svg";
import active from "../../img/temp-sun-active.svg"
import plus from "../../img/plus.svg"

import {
    chosenumber1,
    chosenumber2,
    chosenumber3,
    chosenumber4,
    chosenumber5,
    chosenumber6,
    chosenumber7,
    chosenumber8,
    chosenumber9,
    chosenumber10,
    chosenumber11,
} from "../actions/choices";

const Carousel = (props) => {
    const {
        first_choice,
        second_choice,
        third_choice,
        fourth_choice,
        fith_choice,
        sixth_choice,
        seventh_choice,
        eighth_choice,
        ninth_choice,
        tenth_choice,
        eleventh_choice,
    } = props
        let settings = {
            draggable: false,
            dots: false,
            className: 'option-carousel',
            slidesToShow: 11,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: <SamplePrevArrow/>,
            nextArrow: <SampleNextArrow/>
    }
    return (
        <div>
            <Slider {...settings} >
                <div className={`option ${first_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber1} className="option__img">
                        {first_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature yay yay</span>
                </div>
                <div className={`option ${second_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber2} className="option__img">
                        {second_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Cloud temperature</span>
                </div>
                <div className={`option ${third_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber3} className="option__img">
                        {third_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Water temperature</span>
                </div>
                <div className={`option ${fourth_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber4} className="option__img">
                        {fourth_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Dust temperature</span>
                </div>
                <div className={`option ${fith_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber5} className="option__img">
                        {fith_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Cloud temperature</span>
                </div>
                <div className={`option ${sixth_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber6} className="option__img">
                        {sixth_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Water temperature</span>
                </div>
                <div className={`option ${seventh_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber7} className="option__img">
                        {seventh_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature 1</span>
                </div>
                <div className={`option ${eighth_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber8} className="option__img">
                        {eighth_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature 2</span>
                </div>
                <div className={`option ${ninth_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber9} className="option__img">
                        {ninth_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature 3</span>
                </div>
                <div className={`option ${tenth_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber10} className="option__img">
                        {tenth_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>New Temp</span>
                </div>
                <div className="option add-custom">
                    <button onClick={() => {
                        props.openModal({
                            title: "New Option",
                            content: <AddOption />
                        })
                    }} className="option__img">
                        <img alt='' src={plus}/>
                    </button>
                    <span>Add custom</span>
                </div>
                <div className={`option ${eleventh_choice === true ? "active" : ""}`}>
                    <button onClick={props.chosenumber11} className="option__img">
                        {eleventh_choice === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature 4</span>
                </div>
            </Slider>
        </div>
    )
}

/// Note: Having index eual 1 cancels out the [0] index  This allows us to have an accurate array count on the from end (i.e 12345 instead 01234)



const AddOption = () => {
    const {Option} = Select
    const children = [];
    for (let i = 1; i < 6; i++) {
        children.push(<Option key={i}>Choice {i}</Option>);
    }
    return (
        <form className="modal-form">
            <Input className="form__item" placeholder="Option Name" allowClear />
            <Select
                className="form__item"
                mode="multiple"
                allowClear
                placeholder="Please select options "
                style={{width: "100%"}}
            >
                {children}
            </Select>
            <button className="form__item" type="submit">
                Apply
            </button>
        </form>
    )
}


/// This is why I Love React. We can store props and easily call-back when needed. 
/// Simply utilizing the arrow scrole function. 



const SampleNextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", color: "black"}}
            onClick={onClick}
        />
    );
}

/// This is why I Love React. We can store props and easily call-back when needed. 
/// Simply utilizing the arrow scrole function. 


const SamplePrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

const mapStateToProps = ({ options: {
    first_choice,
    second_choice,
    third_choice,
    fourth_choice,
    fith_choice,
    sixth_choice,
    seventh_choice,
    eighth_choice,
    ninth_choice,
    tenth_choice,
    eleventh_choice,
} }) => {
    return {
        first_choice,
        second_choice,
        third_choice,
        fourth_choice,
        fith_choice,
        sixth_choice,
        seventh_choice,
        eighth_choice,
        ninth_choice,
        tenth_choice,
        eleventh_choice,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            openModal,
            chosenumber1,
            chosenumber2,
            chosenumber3,
            chosenumber4,
            chosenumber5,
            chosenumber6,
            chosenumber7,
            chosenumber8,
            chosenumber9,
            chosenumber10,
            chosenumber11,
        },
        dispatch
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Carousel);