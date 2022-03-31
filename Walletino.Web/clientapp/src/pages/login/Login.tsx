import './login.css' 

const Login = () => {
    return <div className="container page-content">
        <div className="row">
            <div className="col-md-12">
                <div className="content">
                    <div className="content-header">
                        <h1>Login</h1>
                    </div>
                    <hr className="sperator" />
                    <div className="content-body">
                        <input type="text" placeholder="username" className="input" />
                        <input type="password" placeholder="password" className="input" />
                        <button className="button">Login</button>
                        <hr className="sperator" />
                        <button className="button">Register</button>
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
}

export default Login;