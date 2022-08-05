import { useLocation } from "react-router-dom"
import styled from "styled-components";
import axios from "axios";
import { Content } from "../theme/themes";
import { useEffect,useState } from "react";
import HabitForm from "./HabitForm";

export default function Habits(){

    const location = useLocation();
    const userData = location.state;
    const [habitsList,setHabitsList] = useState([]);
    const config = {
        headers: {
            "Authorization": `Bearer ${userData.token}`
        }
    }
    useEffect(()=>{
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config);
        promisse.then(p => setHabitsList(p.data));
        promisse.catch(p => console.log(p));

    },[])

    console.log(habitsList);

    return(
        <>
            <Content color="#E5E5E5">
                <Header>
                    <h1>Texto</h1>
                    <img src={userData.image}/>
                </Header>
                <Container>
                    <div>
                        <h1>Meus hábitos</h1>
                        <button>+</button>
                    </div>
                    {habitsList.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : 'Seus habitos'}
                    <HabitForm></HabitForm>
                </Container>
                <Footer><p>Hábitos</p> <div><span>Hoje</span></div> <p>Histórico</p></Footer>
            </Content>
        </>
    )
}

const Header = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top:0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 18px;
    }
    h1{
        font-size: 20px;
        margin-left: 18px;
    }
`
const Footer = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom:0;
    left: 0;
    p{
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
        margin: auto 30px auto 30px;
    }
    div{
        position: relative;
        width: 100%;
        height: 100%;
    }
    span{
        width: 90px;
        height: 90px;
        font-weight: 400;
        font-size: 18px;
        color: white;
        background-color: #52B6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;
        bottom: 30%;
        left: 20%;
    }  
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 95px;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        justify-content: space-between;
        h1{
            color: #126BA5;
            font-size: 23px;
            margin-left: 17px;
        }
        & > button{
            width: 40px;
            height: 35px;
            border-radius: 5px;
            background-color: #52B6FF;
            border-style: none;
            color:white;
            font-size: 27px;
            margin-right: 17px;
        }
    }
    p{
        font-weight: 400;
        font-size: 18px;
        color: #666666;
    }
`