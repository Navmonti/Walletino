import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AddAccount, DeleteAccount, EditAccount, ViewAccount } from '../../components/app/account';
import Account from './account';
import './main.css'

const Main = () => {
    return <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card-account-holder">
                    <Routes>
                        <Route path="/" element={<Account />} />
                        <Route path="/account" element={<Account />} />
                    </Routes>
                </div>
            </div>
        </div>
    </div>
}

export default Main;