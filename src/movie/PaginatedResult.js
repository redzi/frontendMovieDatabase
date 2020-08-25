import React from 'react';
import PropTypes from 'prop-types';
import Title from "./Titile";
import Poster from "./Poster";

function PaginatedResult(props) {

    return (
        <div className="paginated-result">
            <Title title={props.title} />
            <div>{props.year}</div>
            <Poster poster={props.poster} />
        </div>
    );
}

PaginatedResult.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    imdbID: PropTypes.string
}

export default PaginatedResult;
