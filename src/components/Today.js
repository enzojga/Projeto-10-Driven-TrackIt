import {Content,Container} from "../theme/themes"
import { getDate,getHabits,getConfig } from "./data"
import { useEffect,useState } from "react";
import TodayHabit from "./TodayHabit";
import styled from "styled-components";

export default function Today(){
    const config = getConfig();
    const date = getDate();
    const [todayHabits,setTodayHabits] = useState([]);
    useEffect(()=>{
        const promisse = getHabits('/today',config);
        promisse.then(p => setTodayHabits(p.data));
        promisse.catch(p => console.log(p));

    },[])

    return(
        <Content color="#E5E5E5">
            <Container>
                <DayTitle>{date}</DayTitle>
                {todayHabits.map(h=> <TodayHabit name={h.name} id={h.id} currentSequence={h.currentSequence} done={h.done} highestSequence={h.highestSequence}></TodayHabit>)}
            </Container>
        </Content>
    )
}

const DayTitle = styled.h1`
    font-size:23px;
    color: #126BA5;
`