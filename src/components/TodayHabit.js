import styled from "styled-components"
import { postCheck,getConfig } from "./data"
import axios from "axios";

export default function TodayHabit(props){
    console.log(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`)
    const config = getConfig();
    console.log(props.id);
    function check(){
        const p = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,config);
        p.then(console.log(p));
        p.catch(console.log(p));
    }
    return(
        <TodayContainer>
            <HabitInfo>
                <h1>{props.name}</h1>
                <p>Sequência atual: {props.currentSequence} dias</p>
                <p>Seu recorde: {props.highestSequence} dias</p>
            </HabitInfo>
            <CheckMark onClick={check} done={props.done}>
                <ion-icon name="checkmark-sharp"></ion-icon>
            </CheckMark>
        </TodayContainer>
    )
}

const TodayContainer = styled.div`
    width: 340px;
    height: 94px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
`
const HabitInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    p{
        margin-top: 0;
        font-size: 13px;
    }
    h1{
        margin-bottom: 7px;
        font-size: 20px;
    }
`
const CheckMark = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.done === true ? '#8FC549' : '#E7E7E7'};
    color: white;
    font-size: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-right: 15px;
`