import React from "react";
import './css/PageChanger.css'
import PropTypes from 'prop-types';
import Button from "./Button";

function PageChanger (props) {

    const generateSpan = (current, all, perPage=10) => {

        //todo make page changing shortcuts

        return (
            <div className='page-span'>
                <span>1</span>
                <span>...</span>
                <span>5</span>
            </div>
        )
    }

    return (
        <div className='page-changer'>
            <Button pointer='<'/>
            {generateSpan(props.currentPageResultCount, props.allResultCount)}
            <Button pointer='>'/>
        </div>
    )
}

PageChanger.propTypes = {
    allResultCount: PropTypes.number.isRequired,
    currentPageResultCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default PageChanger