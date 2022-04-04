import { Routes, Route } from 'react-router-dom'; 
import Account from './account';
import './main.css'

const Main = () => {
    return <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card-account-holder"> 
                    <Routes>
                        <Route path="/" element={<Account />}></Route>  
                        <Route path="account/*" element={<Account />}></Route>  
                    </Routes>
                </div>
            </div>
        </div>
    </div>
}

export default Main;