import React from "react";
import defImage from './img/default_image.png';
import './css/Poster.css';

function Poster(props: PosterPropTypes) {
    const imgId = `${props.imdbID}-poster-picture`
    const onError = (): void => {
        const image: HTMLElement | null = document.getElementById(imgId)
        if (image &&  image instanceof HTMLImageElement) {
            (image as HTMLImageElement).setAttribute('src', defImage)
        } else {
            throw new Error("Something has gone wrong with imaga!")
        }
    }

    return (
        <div className='poster'>
            <img id={imgId} src={props.poster} alt='no_image_available' onError={onError}/>
        </div>
    )
}

// const urlValidator = {
//     validateUrl(props, propName, componentName) {
//         const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//             '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
//             '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//             '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//             '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//             '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
//         if (!!pattern.test(props[propName])) {
//             return new Error(`An URL is required as a prop to ${componentName} but actually this has been received: ${props[propName]}.`)
//         }
//     }
// }

export type PosterPropTypes = {
    title: string,
    poster: string,
    imdbID: string
}

export default Poster