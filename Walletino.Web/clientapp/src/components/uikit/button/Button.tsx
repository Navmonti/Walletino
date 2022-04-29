import React from 'react';
import { IButton } from '../../../interfaces';
import './Button.css'

const Button = (props: IButton) => {
    return <button disabled={props.disable}
            className="button">{props.title}</button>
}

export default Button;