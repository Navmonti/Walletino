import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IAccount } from '../../../../interfaces/account';
import { GetAllAccount } from '../../../../redux/action/accountActions';

import './accountStyle.css'

const ViewAccount = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state: IAccount) => state);

    useEffect(() => {
        GetAllAccount();
    }, [])
    return (
        <>
            <div className="add-account" onClick={() => { navigation(`/account/addAccount`) }}>
                <span className="plus">+</span>
            </div>
            <div className="accounts">
                <div className="account-card">
                    <div className="row-item">
                        <span>Title</span> : <span>Credit Bank</span>
                    </div>
                    <div className="row-item">
                        <span>Number</span> : <span>235-33693-3655</span>
                    </div>
                    <div className="row-item">
                        <span>Amount</span> : <span>15000$</span>
                    </div>
                </div> 
            </div>
        </>
    )


}

export default ViewAccount;