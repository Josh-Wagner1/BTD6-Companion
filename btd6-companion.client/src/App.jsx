import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home.jsx';
import Monkeys from './pages/Monkeys.jsx';
import Events from './pages/Events.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Monkeys" element={<Monkeys />} />
                <Route path="/Events" element={<Events />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;