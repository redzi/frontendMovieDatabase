import React from 'react';
import PropTypes from 'prop-types';
import Title from './Titile';
import Poster from './Poster';
import './css/GeneralResult.css'

function GeneralResult (props) {

    return (
        <div className='general-result'>
            <Poster poster={props.poster} title={props.title} imdbID={props.imdbID} />
            <div className='general-result-description'>
                <Title title={props.title} />
                <div>{props.year}</div>
            </div>
        </div>
    );
}

GeneralResult.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired
}

export default GeneralResult;
