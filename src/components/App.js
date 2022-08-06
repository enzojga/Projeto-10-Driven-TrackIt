import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./LoginPage";
import SingIn from "./SingIn";
import Habits from "./Habits";
import {UserContext} from "../contexts/UserContext"
import '../theme/reset.css'

export default function App(){
    const [teste,setTeste] = useState('');
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SingIn />} />
                <Route path="/habitos" element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}