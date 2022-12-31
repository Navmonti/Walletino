import React, { useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'; 
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { getAccountByUserIdAsync } from '../../../../redux/action/accountAction';

import './accountStyle.css'

const ViewAccount = () => {
    const navigation = useNavigate();
    const dispatch = useAppDispatch();
    const account = useAppSelector((state) => state.account);

    useEffect(() => {
        dispatch(getAccountByUserIdAsync(3))
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