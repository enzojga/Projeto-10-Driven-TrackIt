import styled from "styled-components";
import { getConfig,getHabits } from "./data";
import { Container } from "../theme/themes";
import { useEffect,useState } from "react";
import Habit from "./Habit";
import HabitForm from "./HabitForm";

export default function Habits(){
    const [habitsList,setHabitsList] = useState([]);
    const [habtsForms,setHabitsForms] = useState('');

    const config = getConfig();

    useEffect(()=>{
        const promisse = getHabits('',config);
        promisse.then(p => setHabitsList(p.data));
        promisse.catch(p => console.log(p));
    },[habtsForms])
    return(
        <>
                <Container color="#E5E5E5">
                    <HabistHead>
                        <h1 >Meus hábitos</h1>
                        <button onClick={() => setHabitsForms(<HabitForm setHabitsForms={setHabitsForms}/>)}>+</button>
                    </HabistHead>
                    {habtsForms}
                    {habitsList.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : habitsList.map((h) => <Habit name={h.name} id={h.id} days={h.days} habitsList={habitsList} setHabitsList={setHabitsList} ></Habit>)}
                </Container>
        </>
    )
}
const HabistHead = styled.div`
        display: flex;
        width: 100%;
        margin-bottom: 28px;
        justify-content: space-between;
        & > h1{
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
`