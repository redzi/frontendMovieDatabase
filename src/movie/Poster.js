import React from "react";
import PropTypes from 'prop-types';
import defImage from './img/default_image.png';
import './css/Poster.css';

function Poster(props) {
    const imgId = `${props.imdbID}-poster-picture`
    const onError = () => {
        document.getElementById(imgId).src = defImage
    }

    return (
        <div className='poster'>
            <img id={imgId} src={props.poster} alt='no_image_available' onError={onError}/>
        </div>
    )
}

const urlValidator = {
    validateUrl(props, propName, componentName) {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        if (!!pattern.test(props[propName])) {
            return new Error(`An URL is required as a prop to ${componentName} but actually this has been received: ${props[propName]}.`)
        }
    }
}

Poster.propTypes = {
    title: PropTypes.string.isRequired,
    poster: urlValidator.validateUrl,
    imdbID: PropTypes.string.isRequired
}

export default Poster