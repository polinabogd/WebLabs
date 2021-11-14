import {
    Button,
    ButtonWrapper,
    HeroWrapper,
    HeroImage,
    ImageText, ItemsText,
    Label,
    TextWrapper,
} from "./Home.styles";
import Hero from '../../images/vevo.jpg';
import {Items} from "../Items/Items";

export function Home() {
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
            <Items/>
            <ButtonWrapper><Button>view more</Button></ButtonWrapper>
        </div>
    );
}