import axios from "axios";
import styled from "styled-components";
import { DayDiv } from "../theme/themes";
import { getConfig } from "./data";

export default function Habit(props){

    const days = ['D','S','T','Q','Q','S','S'];
    console.log(props);
    const config = getConfig();
    function deleteHabit(){
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`,config).then((p)=>console.log(p))
    }

    return(
        <Container>
            <h3>{props.name}</h3>
            <div>
                {days.map((d,i) => <DayDiv bColor={props.days.includes(i) ? '#CFCFCF' : 'white'} color={props.days.includes(i) ? 'white' : '#DBDBDB'}>{d}</DayDiv>)}
            </div>
            <ion-icon name="trash-outline" onClick={deleteHabit}></ion-icon>
        </Container>
    )
}

const Container = styled.div`
    width: 340px;
    height: 91px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    flex-direction: column;
    position: relative;
    ion-icon{
        font-size: 15px;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    div{
        display: flex;
    }
    h3{
        font-size: 20px;
        color: #666666;
    }
`