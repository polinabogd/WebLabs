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
margin-top: 30px;
padding: 18px 32px;
background-color: #ff6d7d;
border: none;
border-radius: 10px;
width: 250px;
align-self: center;
&:hover {
    box-shadow: 0 0 8px #777676;
}
`