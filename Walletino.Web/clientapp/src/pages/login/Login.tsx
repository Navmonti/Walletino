import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button , Input } from '../../components/uikit';
import AuthService from '../../services/authService';
import './login.css' 

const Login = () => {

    //hooks
    const dispatch = useDispatch();

    //variable
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //inputs
    type variableTypes = "username" | "password"

    const _handleOnChange = (event: any, type: variableTypes) => {
        var value = event.current;
        switch (type) {
            case 'username':
                setUsername(value)
                break;
            case 'password':
                setPassword(value)
                break; 
        }
    }

    const _handleLoginOnClick = async () => {

    }

    const _handleSignUpOnClick = async () => {
         
    }

    return <div className="container page-content">
        <div className="row">
            <div className="col-md-12">
                <div className="card-holder">
                    <div className="card-header">
                        <h1>Login</h1>
                    </div>
                    <div className="card-content">
                        <hr className="sperator" />
                        <Input placeholder={'Please Enter Username'} title={'Username'} disable={false} required={true} description={''} type={'text'} theme={'light'} onChange={(event: any) => _handleOnChange(event, "username")} key={"username"}/>
                        <Input placeholder={'Please Enter Password'} title={'Password'} disable={false} required={true} description={''} type={'password'} theme={'light'} onChange={(event: any) => _handleOnChange(event, "password")} key={"password"}/>
                        <Button onClick={() => _handleLoginOnClick()} type={'default'} title={'Login'} loading={false} disable={false} icon={''} />
                        <hr className="sperator" />
                    </div>
                    <div className="card-footer">
                        <div className="signup-holder">
                            <Button onClick={() => _handleSignUpOnClick()} type={'default'} title={'Sign Up'} loading={false} disable={false} icon={''} />
                            <p>Or</p>
                            <div className="social-holder">
                                <div className="social-icon"></div>
                                <div className="social-icon"></div>
                                <div className="social-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login;