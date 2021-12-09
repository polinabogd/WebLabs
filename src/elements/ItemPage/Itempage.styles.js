import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
padding: 100px 200px;
justify-content: center;
`

export const Image = styled.img`
width: 700px;
height: 400px;
border-radius: 15px;
`

export const Label = styled.h2`
font-weight: 500;
font-size: 68px;
margin: 0;
align-self: center;
`

export const Text = styled.h4`
font-weight: 300;
font-size: 32px;
align-self: center;
`

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 0px 30px;
`
export const Duration = styled.h4`
font-weight: 400;
font-size: 32px;
align-self: center;
`
export const Button = styled.button`
    background: none;
    margin-right: 20px;
    color: black;
    width: 132px;
    height: fit-content;
    border: 1px solid black;
    border-radius: 8px; 
    text-align : center;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.1s;
    outline: none;
    &:hover {
        transform: translateY(-0.25em);

}
`
export const AddButton = styled.button`
    background: none;
    margin-top: 10px;
    margin-right: 20px;
    color: black;
    width: 132px;
    height: fit-content;
    border: 1px solid black;
    border-radius: 8px; 
    text-align : center;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.1s;
    outline: none;
    &:hover {
        transform: translateY(-0.25em);

}
`