import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const Container=styled.div`
color: #000;
    height: 60px;
    background-color: #e8e2ee62;
    position: sticky;
    top: 0;
    margin:0;
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
`;

const Center=styled.div`
     flex: 1;
     text-align:center;
`;

const Language=styled.span`
    font-size: 14px;

`;
const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-left: 25px;
    padding: 5px;
`;
const Input =styled.input`
    border: none;
`;
const Logo=styled.h1`
    font-weight:bold;
`;
const MenuItem=styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
`;



const navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                    <Input/>
                    <Search style={{color:"grey",fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>SHEEN</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                         <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                         </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default navbar