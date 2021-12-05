import styled from 'styled-components';

export const Wrapper = styled.div`
    align-items: center;
    border:  2px solid black;
    height: 550px;
    width: 350px;

`

export const Image = styled.img`
    width: 350px;
    height: 200px;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`

export const Text = styled.h4`
    font-weight: 300;
    font-size: 26px;
`
export const Label = styled.h3`
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 0;
`

export const Button = styled.button`
    padding: 10px 6px;
    left: 50%;
    background-color: #f3f3f3;
    border: solid #c4c4c4 1px;
    border-radius: 10px;
    width: 30%;
    transform: translate(120%, 0);
    &:hover {
        box-shadow: 0 0 8px #777676;
    }
`