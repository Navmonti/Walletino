import React from 'react'
import { Button } from '../../../uikit';
import './accountStyle.css'

const AddAccount = () => {
    return <div className="container page-content">
        <div className="row">
            <div className="col-md-12">
                <div className="content">
                    <div className="content-header">
                        <h1>Add Account</h1>
                    </div>
                    <hr className="sperator" />
                    <div className="content-body">
                        <input type="text" placeholder="username" className="input" />
                        <input type="password" placeholder="password" className="input" />
                        <input type="password" placeholder="confirm password" className="input" />
                        <Button type={'default'} title={'SignUp'} loading={false} disable={false} icon={''} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AddAccount;