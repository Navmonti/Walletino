import React from 'react';
import { IInput } from '../../../interfaces';

const Input = (props: IInput) => {
    return <button disabled={props.disable}
        className="button">{props.title}</button>
}



export default Input;