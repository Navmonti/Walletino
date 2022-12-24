import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { Button } from '../../../uikit';
import './accountStyle.css'

const AddAccount = () => {
    const dispatch = useAppDispatch();
    const [accountTitle, setAccountTitle] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

     


    return <div className="container page-content">
        <div className="row">
            <div className="col-md-12">
                <div className="content">
                    <div className="content-header">
                        <h1>Add Account</h1>
                    </div>
                    <hr className="sperator" />
                    <div className="content-body">
                        <input type="text" placeholder="accountTitle" className="input" />
                        <input type="text" placeholder="accountNumber" className="input" />
                        <Button type={'default'} title={'SignUp'} loading={false} disable={false} icon={''} onClick={function() {
                            throw new Error('Function not implemented.');
                        } } />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AddAccount;