import './login.css'
import Registeration from './registration/Registeration';
import SignIn from './signin/SignIn';

const Login = () => {
    return <div className="container">
        <div className="row">
            <div className="col-md-12"> 
                <SignIn />
            </div>
        </div>
    </div>
}

export default Login;