import {Container} from "../theme/themes"
import { getDate,getHabits,getConfig } from "./data"
import { useEffect,useState,useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import TodayHabit from "./TodayHabit";
import styled from "styled-components";

export default function Today(){
    const {setDoneTasks,setHabits,habits} = useContext(UserContext);
    const config = getConfig();
    const date = getDate();
    const [todayHabits,setTodayHabits] = useState([]);
    useEffect(()=>{
        const promisse = getHabits('/today',config);
        promisse.then(p => {setTodayHabits(p.data);setHabits(p.data);setDoneTasks(p.data.filter(h=> h.done === true))});
        promisse.catch(p => console.log(p));
    },[])
    return(
            <Container color="#E5E5E5">
                <InfoContainer>
                    <DayTitle>{date}</DayTitle>
                    <InfoTile>Nenhum hábito concluído ainda</InfoTile>
                </InfoContainer>
                <div>
                </div>
                {todayHabits.map(h=> <TodayHabit name={h.name} id={h.id} currentSequence={h.currentSequence} done={h.done} highestSequence={h.highestSequence}></TodayHabit>)}
            </Container>
    )
}

const DayTitle = styled.h1`
    font-size:23px;
    color: #126BA5;
    display: block;
`
const InfoTile = styled.h2`
    margin-bottom:30px;
    font-size: 18px;
    color: #BABABA;
`
const InfoContainer = styled.div`
    justify-self: flex-start;
    align-self: flex-start;
    margin-left: 17px;
`