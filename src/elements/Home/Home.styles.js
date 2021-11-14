import styled from 'styled-components';

export const HeroWrapper = styled.div`
margin: 50px auto;
width: 1100px;
justify-content: center;
    display: flex;
    align-items: center;
`

export const HeroImage = styled.img`
width: 400px;
`

export const TextWrapper = styled.div`
margin-left: 200px;
`

export const Label = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 36px;
`

export const ImageText = styled.p`
    font-size: 24px;
`

export const ItemsText = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 36px;
    text-align: center;  
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    margin-top: 40px;
    width: 200px;
    height: 70px;
    background: black;
    border-radius: 8px;
    border: none;
    align-items: center;
    font-size: 30px;
    color: #FFFFFF;
    transition: all 0.1s;
    outline: none;
    &:hover {
        transform: translateY(-0.25em);
    }
`