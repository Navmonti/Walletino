import { Routes, Route, useLocation } from 'react-router-dom';
import { AddAccount, EditAccount, DeleteAccount, ViewAccount, AddViewAccount } from '../../../components/app/account';

const Account = () => {
    const path = useLocation();
    debugger;
    console.log(`${path.pathname}`)
    return <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card-account-holder">
                    <AddViewAccount />
                    <Routes>
                        <Route path={`/addAccount`} element={<AddAccount />} />
                        {/*<Route path={`/account/editAccount`} element={<EditAccount />} />*/}
                        {/*<Route path={`/account/deleteAccunt`} element={<DeleteAccount />} />*/}
                        <Route path={`/`} element={<ViewAccount />} />
                    </Routes>
                </div>
            </div>
        </div>
    </div>
}

export default Account;


