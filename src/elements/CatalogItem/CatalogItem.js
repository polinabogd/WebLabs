import { Image, Wrapper, TextWrapper, Text, Label, Button } from "./CatalogItem.styles";

export const CatalogItem = (props) => {
    return (
        <Wrapper>
            <Image src={props.image}></Image>
            <TextWrapper>
                <Label>{props.artist}</Label>
                <Text>Song: {props.song}</Text>
                <Text>Duration: {props.duration}</Text>
            </TextWrapper>
            <Button onClick={() => props.function(props)}>item page</Button>
        </Wrapper>
    );
}