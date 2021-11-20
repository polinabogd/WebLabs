import { Image, Wrapper, TextWrapper, Text, Label } from "./Item.styles";

export const Item = (props) => {
    return (
        <Wrapper>
            <Image src={props.model}></Image>
            <TextWrapper>
                <Label>{props.artist}</Label>
                <Text>{props.song}</Text>
            </TextWrapper>
        </Wrapper>
    );
}