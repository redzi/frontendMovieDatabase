import React from "react";

function Button (props: ButtonPropTypes) {
    return (
        <button>{props.pointer}</button>
    )
}

type ButtonPropTypes = {
    pointer: string,
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export default Button