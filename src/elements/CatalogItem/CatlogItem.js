import {Wrapper} from './Catalog.styles'
import {Item} from "../Item/Item";
import Clip1 from "../../images/miley.jpg"
import Clip2 from "../../images/eminem.jpg"
import Clip3 from "../../images/kendrick.jpg"


let items = [
    {
        artist: "Miley Cyrus",
        song: "Malibu",
        image: Clip1
    },
    {
        artist: "Eminem",
        song: "Without me",
        image: Clip2
    },
    {
        artist: "Kendrick Lamar",
        song: "Humble",
        image: Clip3
    },
]

export function Catalog() {
    return (
        <Wrapper>
            {
                items.map(item => (
                    <Item image={item.image} artist={item.artist} song={item.song} />))
            }
        </Wrapper>
    );
}