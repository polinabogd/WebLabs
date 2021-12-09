import styled from 'styled-components';
import { Button } from "../ItemPage/Itempage.styles";

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
padding: 20px 50px;
flex-wrap: wrap;
flex-direction: column;
`

export const Label = styled.h2`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 300;
margin: 0;
font-size: 48px;
text-align: center;
`

export const ItemsWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 20px 200px;
`

export const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 0 220px;
`

export const ButtonForm = styled(Button)`
    width: 200px;
    margin: auto;
`