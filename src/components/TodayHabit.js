import styled from "styled-components"

export default function TodayHabit(props){
    return(
        <TodayContainer>
            <HabitInfo>
                <h1>{props.name}</h1>
                <p>Sequência atual: {props.currentSequence} dias</p>
                <p>Seu recorde: {props.highestSequence} dias</p>
            </HabitInfo>
            <CheckMark>
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
    align-items: center;
    border-radius: 5px;
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
    background-color: #8FC549;
    color: white;
    font-size: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-right: 15px;
`