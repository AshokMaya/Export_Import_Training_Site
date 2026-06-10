import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Frame } from './screens/Frame/Frame';
import Payments from './screens/Payments';
import DownloadHallTicket from './screens/DownloadHallTicket';
import { AppHeader } from './components/AppHeader';

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
            <AppHeader />
                <Routes>
                    <Route Component={Frame} path='/' />
                    <Route Component={Payments} path='/payment' />
                    <Route Component={DownloadHallTicket} path='/payment/:id?' />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
