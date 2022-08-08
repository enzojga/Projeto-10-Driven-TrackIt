import { useState,useContext } from "react";
import {Content,Form} from "../theme/themes"
import { ThreeDots } from "react-loader-spinner";
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import logo from '../images/logo.png'
import axios from "axios";
import { postAuth } from "./data";

export default function LoginPage(){

    const navigate = useNavigate();
    const {setImage} = useContext(UserContext);
    const [disable, setDisable] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function setLogin(e){
        e.preventDefault();
        setDisable(true);
        console.log(email,password);
        const getPromisse = postAuth('login',{email,password});
        getPromisse.then((p)=>{ localStorage.setItem('token',JSON.stringify(p.data.token));setImage(p.data.image);navigate('/hoje',{state:p.data})});
        getPromisse.catch((p) => {setEmail('');setPassword('');setDisable(false)});
    }

    return(
        <Content>
            <img src={logo}/>
            <Form onSubmit={setLogin}>
                <input type="email" value={email} disabled={disable} required placeholder='email' onChange={(e) =>{setEmail(e.target.value)}}/>
                <input type="password" value={password} disabled={disable} required placeholder='senha' onChange={(e) =>{setPassword(e.target.value)}}/>
                <button type="submit" disabled={disable}> {disable === true ? <ThreeDots
                                                height = "80"
                                                width = "80"
                                                radius = "9"
                                                color = 'white'
                                                ariaLabel = 'three-dots-loading'     
                                                wrapperStyle
                                                wrapperClass
                                            /> : 'Entrar'}
            </button>
            </Form>
            <Link to="/cadastro" ><p>Não tem uma conta? Cadastre-se!</p></Link>
        </Content>
    )

}
