import React from "react";
import {NavItem, Wrapper, Nav, LogoImage} from './Header.styles';
import Logo from "../../images/logo.jpg";

export function Header() {
    return (
        <Wrapper>
            <LogoImage src={Logo}/>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Catalog</NavItem>
                <NavItem>Cart</NavItem>
            </Nav>
        </Wrapper>
    );
}