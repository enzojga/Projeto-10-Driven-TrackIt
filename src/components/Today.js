import {Container} from "../theme/themes"
import { getDate,getHabits,getConfig } from "./data"
import { useEffect,useState,useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import TodayHabit from "./TodayHabit";
import styled from "styled-components";

export default function Today(){
    const {setDoneTasks,setHabits,habits,doneTasks} = useContext(UserContext);
    const config = getConfig();
    const date = getDate();
    const [todayHabits,setTodayHabits] = useState([]);
    useEffect(()=>{
        const promisse = getHabits('/today',config);
        promisse.then(p => {setTodayHabits(p.data);setHabits(p.data);setDoneTasks(p.data.filter(h=> h.done === true))});
        promisse.catch(p => console.log(p));
    },doneTasks)
    return(
            <Container color="#E5E5E5">
                <InfoContainer>
                    <DayTitle>{date}</DayTitle>
                    <InfoTile>{doneTasks.length === 0 ? 'Nenhum hábito concluído ainda' : <h3>{Math.ceil(((100 * doneTasks.length) / habits.length))}% dos hábitos concluídos</h3>}</InfoTile>
                </InfoContainer>
                <div>
                </div>
                {todayHabits.map(h=> <TodayHabit setTodayHabits={setTodayHabits} setHabits={setHabits} setDoneTasks={setDoneTasks} name={h.name} id={h.id} doneTasks={doneTasks} currentSequence={h.currentSequence} done={h.done} highestSequence={h.highestSequence} setDoneTasks={setDoneTasks}></TodayHabit>)}
            </Container>
    )
}

const DayTitle = styled.div`
    font-size:23px;
    color: #126BA5;
    display: block;
    margin-bottom: 5px;
`
const InfoTile = styled.div`
    margin-bottom:30px;
    font-size: 18px;
    color: #BABABA;
    h3{
        color: #8FC549;
    }
`
const InfoContainer = styled.div`
    justify-self: flex-start;
    align-self: flex-start;
    margin-left: 17px;
`