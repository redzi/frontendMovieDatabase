import React from "react";

class Title extends React.Component<TitlePropTypes> {
    title: String;
    constructor(props: TitlePropTypes) {
        super(props);
        this.title = props.title
    }

    render() {
        return(
            <div className='title'>{this.title}</div>
        )
    }
}

export type TitlePropTypes = {
    title: string
}

export default Title