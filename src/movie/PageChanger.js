import React from "react";
import './css/PageChanger.css'
import PropTypes from 'prop-types';
import Button from "./Button";

function PageChanger (props) {

    const goFirst = (current, all, perPage=10) => {
        //TODO implement
    }

    const goLast = (current, all, perPage=10) => {
        //TODO implement
    }

    const goNext = (current, all, perPage=10) => {
        //TODO implement
    }

    const goPrevious = (current, all, perPage=10) => {
        //TODO implement
    }

    return (
        <div className='page-changer'>
            <Button pointer='<<' onChange={goFirst}/>
            <Button pointer='<' onChange={goPrevious}/>
            <Button pointer='>' onChange={goNext}/>
            <Button pointer='>>' onChange={goLast}/>
        </div>
    )
}

PageChanger.propTypes = {
    allResultCount: PropTypes.number.isRequired,
    currentPageResultCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default PageChanger