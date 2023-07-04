import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from '../components/Home/Home';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/sneakers/' />
                <Route element={<Home />} path='/cart/' />
                <Route element={<div><h1>Page not Found 404</h1></div>} path="*" />
            </Routes>
        </BrowserRouter>
    );
}

export {Routers};