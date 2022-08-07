import { useState,useContext } from "react";
import {Content,Form} from "../theme/themes"
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import logo from '../images/logo.png'
import axios from "axios";
import { postAuth } from "./data";

export default function LoginPage(){

    const navigate = useNavigate();
    const {setImage} = useContext(UserContext);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function setLogin(e){
        e.preventDefault();
        console.log(email,password);
        const getPromisse = postAuth('login',{email,password});
        getPromisse.then((p)=>{ localStorage.setItem('token',JSON.stringify(p.data.token));setImage(p.data.image);navigate('/habitos',{state:p.data})});
        getPromisse.catch((p) => {setEmail('');setPassword('')});
    }

    return(
        <Content>
            <img src={logo}/>
            <Form onSubmit={setLogin} >
                <input type="email" value={email} required placeholder='email' onChange={(e) =>{setEmail(e.target.value)}}/>
                <input type="password" value={password} required placeholder='senha' onChange={(e) =>{setPassword(e.target.value)}}/>
                <button type="submit">Entrar</button>
            </Form>
            <Link to="/cadastro" ><p>Não tem uma conta? Cadastre-se!</p></Link>
        </Content>
    )

}
