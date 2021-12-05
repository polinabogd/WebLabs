import React from "react";
import {NavItem, Wrapper, Nav, LogoImage} from './Header.styles';
import Logo from "../../images/logo.jpg";
import {Link} from "react-router-dom"

export function Header(props) {
    return (
        <Wrapper>
            <LogoImage src={Logo}/>
            <Nav>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
            </Nav>
        </Wrapper>
    );
}