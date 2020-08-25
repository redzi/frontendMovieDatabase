import React from "react";
import PropTypes from 'prop-types';

function Poster(props) {

    //TODO implement downloading images
    return (
        <div>{props.poster}</div>
    )
}

Poster.propTypes = {
    poster: PropTypes.string
}

export default Poster