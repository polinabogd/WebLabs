import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 2px solid black;
`

export const LogoImage = styled.img`
    width: 80px;
    height: 80px;
`

export const Nav = styled.ul`
margin-right: 27vw;
    display: flex;
    list-style: none;
`
export const NavItem = styled.li`
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
export const Links = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`
