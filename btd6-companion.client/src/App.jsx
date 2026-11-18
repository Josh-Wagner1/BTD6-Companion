// import React from 'react';

import Home from './routes/Home.jsx';
import Monkeys from './routes/Monkeys.jsx';

function App() {
    const path = window.location.pathname;

    return (
        <div>
            {path === '/' && <Home />}
            {path === '/Monkeys' && <Monkeys />}
        </div>
    )
}

export default App;