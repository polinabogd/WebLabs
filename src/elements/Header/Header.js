import React from "react";
import {NavItem, NavWrapper, Wrapper, Nav, Search, LogoImage} from './Header.styles';
import Logo from "../../images/logo.jpg";
import {Link} from "react-router-dom"
import {SearchOutlined} from '@ant-design/icons'

export function Header(props) {
    return (
        <Wrapper>
            <LogoImage src={Logo}/>
            <Nav>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
            </Nav>
            <NavWrapper>
                {check(props.isHomePage)}
            </NavWrapper>
        </Wrapper>
    );
}

function check(isHomePage) {
    if (isHomePage) {
        return <LogoImage src={Logo}/>
    }
    return <div style={{display: 'flex', alignItems: 'center'}}>
        <Search id={"search_button"}/>
        <SearchOutlined />
    </div>
}