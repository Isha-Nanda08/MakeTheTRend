import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material";

const Container=styled.div``;

const Wrapper=styled.div`
    padding: 20px;
`;

const Title=styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type==="filled" && "none"};
    background-color:${props=>props.type==="filled" ? "black" : "transparent"};
    color:${props=>props.type==="filled" && "white"};
`
const TopTexts=styled.div``;

const TopText=styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom=styled.div`
display: flex;
justify-content: space-between;

`



const Info=styled.div`
    flex: 3;
`;
const Hr=styled.hr`
    background-color: #eee;
    border:none;
    height: 5px;
`


const Product=styled.div`
    display: flex;
    justify-content:space-between;
`
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
`
const Image=styled.img`
    height: 150px;
    width: 200px;
`
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color:${props=>props.color};
`
const ProductSize=styled.span``
const PriceDetail=styled.span`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`

const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin-bottom:20px;
`
const ProductAmount=styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Summary=styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-end-end-radius: 10px;
    padding: 20px;
    height: 50vh;
    flex-direction:column;

`
const SummaryTitle=styled.h1`
    font-weight: 200;

`;
const SummaryItem=styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type==="total" && "500"};
  font-size: ${props=>props.type==="total" && "24px"};

`;

const SummaryItemText=styled.span``;

const SummaryItemPrice=styled.span``;

const Button=styled.button`
    padding: 10px;
    width: 100%;
    background-color: #c66927;
    color: white;
    font-weight: 600;
    &:hover{
        background-color: #c66927a2;
    }
`;
// const ProductAmount=styled.div``
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67001012_TM_B.jpg?imwidth=2048&imdensity=1&ts=1697205807907"/>
                            <Details>
                                <ProductName><b>Product:</b> ROADSTER STRAIGHT JEANS</ProductName>
                                <ProductId><b>ID:</b>4567899754</ProductId>
                                <ProductColor color="lightblue"/>
                                <ProductSize><b>Size:</b>32</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>₹ 1000</ProductPrice>
                            
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://contents.mediadecathlon.com/p2155510/2d4c941c14f1be10172d8977107329a6/p2155510.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>RUN ACTIVE Lightweight Cushioned Men Running Shoes  </ProductName>
                                <ProductId><b>ID:</b>456899754</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>UK7</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>₹ 989</ProductPrice>
                            
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY
                    </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>₹ 1989</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>estimated shipping</SummaryItemText>
                        <SummaryItemPrice>₹ 51</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping discount</SummaryItemText>
                        <SummaryItemPrice>- ₹ 51</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>₹ 1989</SummaryItemPrice>
                    </SummaryItem>
                <Button>CHECKOUT NOW</Button>
                </Summary>

            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart