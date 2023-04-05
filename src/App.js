import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <div className="page">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage test="111" />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
