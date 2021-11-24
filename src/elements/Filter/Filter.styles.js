import styled from 'styled-components';

export const GlobalWrapper  = styled.div`
    display: flex;
    padding: 5px 80px;
`

export const FilterWrapper = styled.div`
    display: flex;
    flex: 10;
`

export const FilterSelector = styled.select`
    margin-right: 40px;
    padding: 10px 32px;
    border-radius: 5px;
    border: solid #c4c4c4 1px;
`

export const LabelText = styled.h4`
    font-weight: 800;
    margin: 0 30px;
    align-self: center;
`

export const ApplyButton = styled.button`
    margin: 0 auto;
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

export const HorLine = styled.hr`
    margin-top: 0;
`