import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Main, Panel, Signup } from './pages';

import 'bootstrap/dist/css/bootstrap.css'; 

function App() {
    return (
        <div className="App"> 
            <Router>
                <Routes>
                    <Route path="/panel" element={<Panel />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />  
                    <Route path="/" element={<Main />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
