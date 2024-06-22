import styled from "styled-components"
const Container=styled.div`
    width: 100v;
    height: 100vh;
    display: flex;
    background:linear-gradient(hsla(0, 0%, 100%, 0.3),rgba(255,255,255,0.3)) ,url("https://www.theupcoming.co.uk/wp-content/uploads/2012/08/woman-fashion-clothes-pexels-generic-adult-beautiful-brunette-871494.jpg") center;
    background-size: cover;
    align-items: center;
    justify-content: center;
`;

const Wrapper=styled.div`
    width: 30%;
    height: 60%;
    padding: 20px;
    background-color: #ffffffbb;

`;
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form=styled.form`
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction:column;
    /* align-items: center; */

`;


const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin:15px 0px;
    padding: 10px;

`;



const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #c66927;
    color: white;
    cursor: pointer;
    margin-bottom: 15px;
    align-self: center;
    &:hover{
        background-color: #c66927;
        opacity: 0.8;
        }
`;
const Link=styled.a`
    font-size: 12px;
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
    color: #080808;
    align-self:center;
    &:hover{
        color: #c66927;
        opacity: 0.8;
        }
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login