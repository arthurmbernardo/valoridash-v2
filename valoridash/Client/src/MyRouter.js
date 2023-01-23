import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Login from './components/login/Login'
import Home from './components/home/Home'
import { useState } from 'react';


function MyRouter(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
   )
}

export default MyRouter;