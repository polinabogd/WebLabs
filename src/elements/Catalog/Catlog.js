import {Wrapper} from './Catalog.styles'
import {CatalogItem} from "../CatalogItem/CatalogItem";
import Clip1 from "../../images/miley.jpg"
import Clip2 from "../../images/eminem.jpg"
import Clip3 from "../../images/kendrick.jpg"
import {useEffect, useState} from "react";
import {Filter} from "../Filter/Filter";
import {ItemPage} from "../ItemPage/ItemPage";
import axios from "axios";
import {Header} from "../Header/Header";
import BarWave from "react-cssfx-loading/lib/BarWave";


export function Catalog() {
    const [items, update] = useState(null);
    const [view, setView] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8098/clips`)
        .then((result) => {
                update(result.data)
            });
    }, []);

    function updateItems(artist, order, duration, input) {
        console.log(artist, order, duration)
        axios.get('http://localhost:8098/clips/param', {
            params:
                {
                    artist: artist,
                    order: order,
                    duration: duration
                }
        }).then((result) => {
            console.log(result.data)
            filterInput(result.data, input)
        });
    }

    function filterInput(array, input) {
        update(array.filter(item => item.artist.search(input.value) !== -1));
    }
  
    function toggleView(props) {
        setView(props);
    }

    function returnItems(items) {
        function createImage() {
            return Clip1;
        }

        if (items)
            return <>
                <Filter function={updateItems}/>
                <Wrapper>
                    {items.map(item => (
                        <CatalogItem key={item.artist} artist={item.artist} song={item.song} duration={item.duration}
                                    image={createImage(item.artist)} text={item.description}
                                    function={toggleView}/>))}
                </Wrapper>
            </>
        return <>
            <Filter function={updateItems}/>
            <Wrapper style={{padding: "200px"}}>
                <BarWave color="#000" width="100px" height="100px" duration="3s"/>
            </Wrapper>

        </>
    }

    if (view == null)
        return (returnItems(items))
    return (
        <>
            <Header/>
            <ItemPage item={view}/>
        </>
    )
}