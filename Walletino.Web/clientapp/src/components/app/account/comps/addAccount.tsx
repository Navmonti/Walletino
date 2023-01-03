import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { Button } from '../../../uikit';
import './accountStyle.css'

const AddAccount = () => {
    const dispatch = useAppDispatch();

    //variable
    const [accountTitle, setAccountTitle] = useState('');
    const [accountNumber, setAccountNumber] = useState(''); 

    //inputs
    type variableTypes = "accountTitle" | "accountNumber" 



    //actions
    const _handleOnChange = (event: any, type: variableTypes) => {
        var value = event.target.value;
        switch (type) {
            case 'accountTitle':
                setAccountTitle(value)
                break;
            case 'accountNumber':
                setAccountNumber(value)
                break;
        }
    }

    const _handleSubmit = (event: any, type: variableTypes) => {
         
    }

    return <div className="container page-content">
        <div className="row">
            <div className="col-md-12">
                <div className="content">
                    <div className="content-header">
                        <h1>Add Account</h1>
                    </div>
                    <hr className="sperator" />
                    <div className="content-body">
                        <input type="text" placeholder="accountTitle" className="input" onChange={(event: any) => _handleOnChange(event, "accountTitle")} />
                        <input type="text" placeholder="accountNumber" className="input" onChange={(event: any) => _handleOnChange(event, "accountNumber")}/>
                        <button onClick={() => _handleLoginOnClick()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AddAccount;