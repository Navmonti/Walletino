import React, { useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'; 
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { getAccountByUserIdAsync } from '../../../../redux/action/accountAction';

import './accountStyle.css'

const ViewAccount = () => {
    const navigation = useNavigate();
    const dispatch = useAppDispatch();
    const accounts = useAppSelector((state) => state.account.accounts);
    console.log(accounts)
    useEffect(() => {
        dispatch(getAccountByUserIdAsync(3))
    }, [])
    return (
        <>
            <div className="add-account" onClick={() => { navigation(`/account/addAccount`) }}>
                <span className="plus">+</span>
            </div>
            {
                accounts.length > 0 ?
                    accounts.map((item,index) => {
                        <div key={index} className="accounts">
                            <div className="account-card">
                                <div className="row-item">
                                    <span>Title</span> : <span>item.accountName</span>
                                </div>
                                <div className="row-item">
                                    <span>Number</span> : <span>item.accountNumber</span>
                                </div>
                                <div className="row-item">
                                    <span>Amount</span> : <span>15000$</span>
                                </div>
                            </div>
                        </div>
})
                    : <h1>Account Not Exist</h1>
            }
            
        </>
    )


}

export default ViewAccount;