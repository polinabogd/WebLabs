import {
    Button,
    HeroWrapper,
    HeroImage,
    ImageText, ItemsText,
    Label,
    TextWrapper,
    ItemList,
    ButtonWrapper,
} from "./Home.styles";
import Hero from '../../images/vevo.jpg';
import Miley from '../../images/miley.jpg';
import Lamar from '../../images/kendrick.jpg';
import Eminem from '../../images/eminem.jpg';
import {HomeItem} from "../HomeItem/HomeItem";
import { useState } from "react";

export function Home() {
    const [viewMore, toggle] = useState(false);
    const [clips, showAll] = useState([
        {
            image: Miley,
            artist: "Miley Cyrus",
            song: "Malibu"
        },
        {
            image: Eminem,
            artist: "Eminem",
            song: "Without out"
        },
        {
            image: Lamar,
            artist: "Kendrick Lamar",
            song: "Humble"
        },
        {
            image: Miley,
            artist: "Miley Cyrus",
            song: "Mother`s doughter"
        },
        {
            image: Eminem,
            artist: "Eminem",
            song: "Rap god"
        },
        {
            image: Lamar,
            artist: "Kendrick Lamar",
            song: "Love"
        }
    ])
    function changeClips() {
        if (!viewMore) {
            showAll(clips.concat(clips));
        } else {
            showAll(clips.slice(0, 3));
        }
    }

    function toggleView() {
        toggle(!viewMore);
        changeClips();
    }

    return (
        <div>
            <HeroWrapper>
                <HeroImage src={Hero}/>
                <TextWrapper>
                    <Label>Buy clips now!</Label>
                    <ImageText>Go get our incredble clips. Is there any logic in buying clips? Of course ni! But thats my variant so here you go.</ImageText>
                </TextWrapper>
            </HeroWrapper>
            <ItemsText>Clips</ItemsText>
            
            <ItemList>
                {clips.map(clip => (<HomeItem image={clip.image} key={clip.artist.toString()} artist = {clip.artist}  song = {clip.song}/>))}
            </ItemList>
            <ButtonWrapper><Button onClick={toggleView}>view more</Button></ButtonWrapper>
        </div>
    );
}