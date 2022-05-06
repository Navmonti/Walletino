import { IInput } from '../../../interfaces/component';
import './Input.css'
const Input = (props: IInput) => {
    return (
        <div className="input-holder">
            <div className="input-header">
                <span className="input-label">{props.title}</span>
                {props.required ? <span className="required">*</span> : <></>}
            </div>
            <input className="input" type={props.title} placeholder={props.placeholder} onChange={(event) => { props.onChange(event, props.key) }} />
            {props.description ? <span className="input-description">{props.description}</span> : <></>}
        </div>)
}



export default Input;