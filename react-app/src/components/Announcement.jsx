// import React from 'react'
import styled from "styled-components"

const Container=styled.div`
/* height: 30px;position:sticky; */
    /* top:0; */
    height: 30px;
    background-color: #c66927;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        SUPER DEAL- FREE SHIPPING ON ORDERS ABOVE rs500
    </Container>
  )
}

export default Announcement