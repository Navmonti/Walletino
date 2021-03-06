import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Main, Panel, Signup } from './pages';
import { Header } from './components/app/shared';

import 'bootstrap/dist/css/bootstrap.css';
import '../src/asset/styles/general.css'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/*" element={<Main />}></Route>
                <Route path="panel" element={<Panel />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="*" element={<h1>Not Found</h1>}></Route>
            </Routes>
        </div>
    );
}

export default App;
