import React from "react";
import PropTypes from 'prop-types';

function Button (props) {
    return (
        <button>{props.pointer}</button>
    )
}

Button.propTypes = {
    pointer: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Button