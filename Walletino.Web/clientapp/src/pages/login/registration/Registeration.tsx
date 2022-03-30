import './registeration.css'

const Registeration = () => {
    return <div className="container page-content">
        <div className="row">
            <div className="col-md-12">
                <div className="content">
                    <div className="content-header">
                        <h1>Registeration</h1>
                    </div>
                    <hr className="sperator" />
                    <div className="content-body">
                        <input type="text" placeholder="username" className="input" />
                        <input type="password" placeholder="password" className="input" />
                        <input type="password" placeholder="confirm password" className="input" />
                        <button className="button">Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Registeration;