import React from "react";
import PropTypes from 'prop-types';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title
    }

    render() {
        return(
            <div className='title'>{this.title}</div>
        )
    }
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title