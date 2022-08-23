import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Input } from '../../components/uikit';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ISignup } from '../../interfaces/user';
import { signupAction } from './../../redux/slice/signupSlice'
import './signup.css'

const Signup = () => {
    const signup = useAppSelector((state) => state.signup)
    const dispatch = useAppDispatch();

    //variable
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    //inputs
    type variableTypes = "firstname" | "lastname" | "email" | "username" | "password" | "confirmPassword"

    const _handleOnChange = (event: any, type: variableTypes) => {
        var value = event.target.value;
        debugger;
        switch (type) {
            case 'firstname':
                setFirstname(value)
                break;
            case 'lastname':
                setLastname(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'username':
                setUsername(value)
                break;
            case 'password':
                setPassword(value)
                break;
            case 'confirmPassword':
                setConfirmPassword(value)
                break;
        }
    }
    
    const user = useSelector((state:any)=> state.signup)
    const _handleOnClick = () => {
        //const dataSet: ISignup = {
        //    firstname: firstname,
        //    lastname: lastname,
        //    email: email,
        //    username: username,
        //    password: password,
        //    confirmPassword: confirmPassword
        //}
        debugger;
        dispatch(signupAction({ firstname }))
        console.log(user)

  
    }

    return <div className="container">
        <div className="row page-content">
            <div className="col-md-6">
                <div className="card-holder">
                    <div className="card-header">
                        <h1>Signup</h1>
                    </div>
                    <div className="card-content">
                        <hr className="sperator" />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <Input title={'Firstname'} placeholder={'Please Enter Firstname (optional)'} disable={false} required={false} description={''} type={'text'} theme={'light'} onChange={(event: any) => _handleOnChange(event, "firstname")} key={"firstname"} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <Input title={'Lastname'} placeholder={'Please Enter Lastname (optional)'} disable={false} required={false} description={''} type={'text'} theme={'light'} onChange={(event: any) => _handleOnChange(event, "lastname")} key={"lastname"} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <Input title={'Email'} placeholder={'Please Enter Email'} disable={false} required={true} description={''} type={'text'} theme={'light'} onChange={(event: any) => _handleOnChange(event, "email")} key={"email"} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <Input title={'Username'} placeholder={'Please Enter Username'} disable={false} required={true} description={''} type={'text'} theme={'light'} onChange={(event: any) => _handleOnChange(event, "username")} key={"username"} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <Input title={'Password'} placeholder={'Please Enter Password'} disable={false} required={true} description={''} type={'password'} theme={'light'} onChange={(event: any) => _handleOnChange(event, "password")} key={"password"} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <Input title={'Confirm password'} placeholder={'Please Enter Confirm password'} disable={false} required={true} description={''} type={'password'} theme={'light'} onChange={(event: any) => _handleOnChange(event, "confirmPassword")} key={"confirmPassword"} />
                            </div>
                        </div>
                        <hr className="sperator" />
                    </div>
                    <div className="card-footer">
                        <div className="button-holder">
                            {/*<Button type={'default'} title={'Sign Up'} loading={false} disable={false} icon={''} onClick={() => _handleOnClick()} />*/}
                            <button onClick={() => _handleOnClick()}></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Signup;