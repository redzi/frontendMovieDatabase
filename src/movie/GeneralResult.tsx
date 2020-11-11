import React from 'react';
import Title from './Titile';
import Poster from './Poster';
import './css/GeneralResult.css'

function GeneralResult (props: GeneralResultPropTypes): JSX.Element {

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

export type GeneralResultPropTypes = {
    title: string,
    year: string,
    poster: string,
    imdbID: string
}

export default GeneralResult;
