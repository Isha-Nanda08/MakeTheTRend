import styled from "styled-components" ;
import {mobile} from "../responsive";

const Container=styled.div`
    width: 100v;
    height: 100vh;
    display: flex;
    background:linear-gradient(hsla(0, 0%, 100%, 0.3),rgba(255,255,255,0.3)) ,url("https://images.pexels.com/photos/17060692/pexels-photo-17060692/free-photo-of-woman-posing-in-an-orange-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
    background-size: cover;
    align-items: center;
    justify-content: center;
`;

const Wrapper=styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width:"75%",height:"50%"})}

`;
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form=styled.form`
    display: flex;
    flex-wrap: wrap;

`;


const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

`;

const Agreement=styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #c66927;
    color: white;
    cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="email"/>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register