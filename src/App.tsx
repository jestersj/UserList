import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "./UsersPage";
import IndexPage from "./IndexPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <main className={'cont'}>
                <Routes>
                    <Route path={'/'} element={<IndexPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;