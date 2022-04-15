import React from 'react';
import { objButton } from '../../../interfaces';

type typeButton = "default" | "add" | "edit" | "delete";

interface IButton {
    type: typeButton;
    title: string;
    loading: boolean;
    disabled: boolean;
    icon: string;
}


const Button = (props: IButton) => {
    return <button disabled={props.disabled}
            className="button">{props.title}</button>
}

export default Button;