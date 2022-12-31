import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button , Input } from '../../components/uikit';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ILogin } from '../../interfaces/user';
import { loginAsync } from '../../redux/action/authAction';
import './login.css' 

const Login = () => {
    const navigation = useNavigate();
    const token = useAppSelector((state) => state.login.token)

    //hooks
    const dispatch = useAppDispatch();

    //variable
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //inputs
    type variableTypes = "username" | "password"

    const _handleOnChange = (event: any, type: variableTypes) => {
        var value = event.target.value;
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
        var dataset: ILogin = {
            username: username,
            password: password,
            token: ''
        }
        dispatch(loginAsync(dataset))
        localStorage.setItem("token", token);
        navigation(`/account`)
    }

    const _handleSignUpOnClick = async () => {
        navigation(`/signup`)
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
                        <Input placeholder={'Please Enter Password'} title={'Password'} disable={false} required={true} description={''} type={'password'} theme={'light'} onChange={(event: any) => _handleOnChange(event, "password")} key={"password"} />
                        <button onClick={() => _handleLoginOnClick()}>Login</button>
                        <hr className="sperator" />
                    </div>
                    <div className="card-footer">
                        <div className="signup-holder">
                            <button onClick={() => _handleSignUpOnClick()}>SignUp</button>
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