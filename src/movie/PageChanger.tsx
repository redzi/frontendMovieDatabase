import React from "react";
import './css/PageChanger.css'
import Button from "./Button";

function PageChanger (props: PageChangerPropTypes) {

    const goFirst: PageChangingFunction = (current: number, all: number, perPage=10) => {
        //TODO implement
    }

    const goLast: PageChangingFunction = (current, all, perPage=10) => {
        //TODO implement
    }

    const goNext: PageChangingFunction = (current, all, perPage=10) => {
        //TODO implement
    }

    const goPrevious: PageChangingFunction = (current, all, perPage=10) => {
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

//TODO change typescrip arguments
type PageChangingFunction = (...arg: any[]) => void

type PageChangerPropTypes = {
    allResultCount: number,
    currentPageResultCount: number,
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export default PageChanger