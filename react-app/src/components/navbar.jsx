import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive"
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';



const Container=styled.div`
color: #000;
    height: 60px;
    background-color: #e8e2ee62;
    position: sticky;
    margin:0;
    /* position: sticky; */
    top: 30px;
    ${mobile({ overflow:"hidden" ,padding:"10px 0px"})}
`
const Wrapper=styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    `;

const Right=styled.div`
     flex: 1;
     display: flex;
     align-items:center;
     justify-content: flex-end;
     ${mobile({ flex:2,justifyContent:"center"})};
`

const Center=styled.div`
     flex: 1;
     text-align:center;
`;

const Language=styled.span`
    font-size: 14px;
    ${mobile({display:"none"})};

`;
const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft:"10px"})}

`;
const Input =styled.input`
    border: none;
    ${mobile({width:"50px"})}
`;
const Logo=styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})};
`;
const MenuItem=styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
`;



const navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)

  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"grey",fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>SHEEN</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                   <Link  to="/cart">
                    <MenuItem>
                         <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                         </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default navbar