import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SingIn from "./SingIn";
import Habits from "./Habits";
import '../theme/reset.css'

export default function App(){
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