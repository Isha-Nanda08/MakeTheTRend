import styled from "styled-components";

const Container=styled.div`
    flex:1;
    margin:3px;
    height:50vh;
    position:relative;
`
const Image=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    transition:all 0.5s ease;
    &:hover{
        transform: scale(1.1);
        background-color:#00000099;
    }
`
const Title=styled.h1`
    color:white;
    text-shadow:2px 2px 4px #000000;
    margin-bottom:20px;

`
const Info=styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Button=styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:grey;
    cursor:pointer;
    font-weight:bold;
    &:hover{
        background-color:lightgrey;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
           <Image src={item.img}/> 
           <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
    </Container>
  );
};

export default CategoryItem;