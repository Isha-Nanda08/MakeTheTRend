import styled from "styled-components" 
import { ArrowBackIosOutlined,ArrowForwardIosOutlined } from '@mui/icons-material';
import { Button } from "@mui/material";

const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #9d8b8b;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left:${props=> props.direction==="left" && "10px"};
    right:${props=> props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper=styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw);

`

const Slide=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color:${props=>props.bg};
`
const ImgContainer=styled.div`
    flex: 1;
    height: 100%;

`

const Image=styled.img`
    height: 80%;
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 50px;
    color: #000;
`;

const Title=styled.h1`
    font-size:70px;
`
const Desc=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const BUtton=styled.button`

`

const Slider = () => {
    // const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{

    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowBackIosOutlined/>
        </Arrow>
        <Wrapper>
            <Slide bg="f5fafd">
            <ImgContainer>
                <Image src="https://watermark.lovepik.com/photo/20211124/large/lovepik-fashion-womens-summer-shopping-image-picture_500961851.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE!!</Title>
                <Desc>GET UPTO 50% OFF ON TOP BRANDS ON T-SHIRTS</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
            <Slide>
            <ImgContainer>
                <Image src="https://media.istockphoto.com/id/847731222/photo/happy-running-beautiful-woman-with-many-shopping-bags.jpg?s=612x612&w=0&k=20&c=UF9xH8Nlh8WV6ShYDghaxFXyFUcNQMPgbGOA1m58rRk="/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE!!</Title>
                <Desc>GET UPTO 50% OFF ON TOP BRANDS ON T-SHIRTS</Desc>
                <BUtton>SHOP NOW</BUtton>
            </InfoContainer>
            </Slide>
            <Slide>
            <ImgContainer>
                <Image src="https://media.istockphoto.com/id/847731222/photo/happy-running-beautiful-woman-with-many-shopping-bags.jpg?s=612x612&w=0&k=20&c=UF9xH8Nlh8WV6ShYDghaxFXyFUcNQMPgbGOA1m58rRk="/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE!!</Title>
                <Desc>GET UPTO 50% OFF ON TOP BRANDS ON T-SHIRTS</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider