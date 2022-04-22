import React from 'react';
import { IButton } from '../../../interfaces';

const Button = (props: IButton) => {
    return <button disabled={props.disable}
            className="button">{props.title}</button>
}



export default Button;