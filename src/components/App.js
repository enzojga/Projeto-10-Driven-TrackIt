import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./LoginPage";
import SingIn from "./SingIn";
import Habits from "./Habits";
import Header from "./Header";
import Today from "./Today";
import {UserProvider} from "../contexts/UserContext"
import '../theme/reset.css'

export default function App(){
    return(
        <BrowserRouter>
            <UserProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<SingIn />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" element={<Today />} />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    )
}