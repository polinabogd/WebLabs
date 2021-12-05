import {GlobalWrapper, FilterSelector, LabelText, ApplyButton, FilterWrapper, HorLine} from "./Filter.styles";
import {LogoImage, Nav, NavItem, Search, Wrapper} from "../Header/Header.styles";
import {useState} from "react";
import {SearchOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom";
import Logo from "../../images/logo.jpg"

export function Filter(props) {
    const [artist, changeartist] = useState("null");
    const [order, changeOrder] = useState("0");
    const [duration, changeDuration] = useState("0");


    function handleArtist(artistSelector) {
        changeartist(artistSelector.target.value);
    }

    function handleOrder(orderSelector) {
        changeOrder(orderSelector.target.value);
    }

    function handleDuration(durationSelector) {
        changeDuration(durationSelector.target.value);
    }

    function updateItems() {
        const input = document.getElementById("search_input");
        props.function(artist, order, duration, input);
    }

    return (
        <>
        <Wrapper>
            <LogoImage src={Logo}/>
                <Nav>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                    <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                    <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
                </Nav>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Search id={"search_input"}/>
                        <SearchOutlined/>
                    </div>
            </Wrapper>
            <HorLine/>
            <GlobalWrapper>
                <FilterWrapper>
                    <LabelText>Sort by:</LabelText>
                    <FilterSelector id="artist" onChange={handleArtist}>
                        <option value="null">Choose filter</option>
                        <option value="duration">Duration</option>
                        <option value="artist">Artist</option>
                    </FilterSelector>
                    <LabelText>Order by:</LabelText>
                    <FilterSelector id="order" onChange={handleOrder}>
                        <option value="null">Choose order</option>
                        <option value="1">Ascending</option>
                        <option value="2">Descending</option>
                    </FilterSelector>
                    <LabelText>Duration:</LabelText>
                    <FilterSelector id="duration" onChange={handleDuration}>
                        <option value="null">Choose duration</option>
                        <option value="1">&lt; 360 sec</option>
                        <option value="2">&gt; 360 sec</option>
                    </FilterSelector>
                </FilterWrapper>
                <ApplyButton onClick={updateItems}>Apply</ApplyButton>
            </GlobalWrapper>
            <HorLine style={{marginTop: '10px'}}/>
        </>
    );
}