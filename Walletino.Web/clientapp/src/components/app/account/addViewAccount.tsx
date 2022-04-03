import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './accountStyle.css'

const AddViewAccount = () => {
    const navigation = useNavigate();
    return <div className="add-account" onClick={() => { navigation(`/account/addAccount`) }}>
        <span className="plus">+</span>
    </div>

}

export default AddViewAccount;