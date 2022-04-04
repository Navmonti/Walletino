import React from 'react'
import { useNavigate } from 'react-router-dom';

import './accountStyle.css'

const ViewAccount = () => {
    const navigation = useNavigate();

    return (
        <>
            <div className="add-account" onClick={() => { navigation(`/account/addAccount`) }}>
                <span className="plus">+</span>
            </div>
            <div className="accounts">
                <div className="account-card">
                    <div className="row-item">

                    </div>
                </div>
                <div className="account-card">

                </div>
                <div className="account-card">

                </div>
            </div>
        </>
    )


}

export default ViewAccount;