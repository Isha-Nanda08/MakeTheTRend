import styled from "styled-components";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const Container=styled.div`
    display:flex;
`

const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo=styled.h1``

const Desc=styled.p`
    margin:20px 0px
`

const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color:#${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 6px;
`


const Right=styled.div`
    flex:1;
    padding:20px;
`
const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;

`
const Payment=styled.img`
    width:50%;
`

const Center=styled.div`
    flex:1;
    padding: 20px;
`
const Title=styled.h3`
    margin-bottom: 30px;
`

const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHEEN</Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, nulla distinctio ducimus ipsam aliquam hic ipsum sed culpa voluptatem adipisci.
            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <FacebookOutlinedIcon/>
                </SocialIcon>
                <SocialIcon color="385999">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="385999">
                    <TwitterIcon/>
                </SocialIcon >
                <SocialIcon color="385999">
                    <PinterestIcon/>
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Kids Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Beauty</ListItem>
           
            <ListItem>My Account</ListItem>
            <ListItem>My Orders</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
    
             <PlaceIcon style={{marginRight:"10px"}}/>   Punjab, INDIA
            </ContactItem>
            <ContactItem>
              <PhoneIcon  style={{marginRight:"10px"}}/>  +91-987690
            </ContactItem>
            <ContactItem>
        
            <EmailOutlinedIcon  style={{marginRight:"10px"}}/>sheen@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer