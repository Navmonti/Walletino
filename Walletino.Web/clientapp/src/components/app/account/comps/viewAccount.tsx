import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { IAccount } from '../../../../interfaces/account';
import getallAccountAsync from "../../../../redux/slice/accountSlice"

import './accountStyle.css'

const ViewAccount = () => {
    const navigation = useNavigate();
    const dispatch = useAppDispatch();
    const account = useSelector((state: IAccount) => state);

    useEffect(() => {
        //dispatch(getallAccountAsync(1))
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