import { useLocation } from "react-router-dom"
import styled from "styled-components";
import { getToken,getConfig,getHabits } from "./data";
import axios from "axios";
import { Content,Container } from "../theme/themes";
import { useEffect,useState } from "react";

import Habit from "./Habit";
import HabitForm from "./HabitForm";

export default function Habits(){

    const location = useLocation();
    const userData = location.state;
    const [habitsList,setHabitsList] = useState([]);
    const [habtsForms,setHabitsForms] = useState([]);

    const config = getConfig();

    useEffect(()=>{
        const promisse = getHabits('',config);
        promisse.then(p => setHabitsList(p.data));
        promisse.catch(p => console.log(p));

    },[habtsForms])

    return(
        <>
            <Content color="#E5E5E5">
                <Container>
                    <div>
                        <h1 >Meus hábitos</h1>
                        <button onClick={() => {setHabitsForms([...habtsForms,1])}}>+</button>
                    </div>
                    {habitsList.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : habitsList.map((h) => <Habit name={h.name} id={h.id} days={h.days}></Habit>)}
                    {habtsForms.map((p) => <HabitForm></HabitForm>)}
                </Container>
                <Footer><p>Hábitos</p> <div><span>Hoje</span></div> <p>Histórico</p></Footer>
            </Content>
        </>
    )
}

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