import { Content,Container } from "../theme/themes";
import styled from "styled-components";

export default function Historic(){
    return(
            <Container color="#E5E5E5">
                <InfoContainer>
                    <Title>Histórico</Title>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </InfoContainer>
            </Container>        
    )
}

const Title = styled.h1`
    font-size:23px;
    color: #126BA5;
    margin-bottom: 17px;
`
const InfoContainer = styled.div`
    justify-self: flex-start;
    align-self: flex-start;
    margin-left: 17px;
`