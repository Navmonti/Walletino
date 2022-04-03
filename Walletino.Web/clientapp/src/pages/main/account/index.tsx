import { Routes, Route} from 'react-router-dom';
import { AddAccount, EditAccount, DeleteAccount, ViewAccount, AddViewAccount } from '../../../components/app/account';

const Account = () => { 
    return <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card-account-holder">
                    <Routes>
                        <Route path="/" element={<ViewAccount />}></Route>
                        <Route path="addAccount" element={<AddAccount />}></Route>
                        <Route path="editAccount" element={<EditAccount />}></Route>
                        <Route path="deleteAccunt" element={<DeleteAccount />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    </div>
}

export default Account;


