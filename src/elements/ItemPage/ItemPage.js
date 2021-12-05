import {Image, Label, Text, TextWrapper, Wrapper, Duration, Button} from "./Itempage.styles";

export function ItemPage(item) {
    return (
        <>
            <Wrapper>
                <Image src={item.item.image}/>
                <TextWrapper>
                    <Label>{item.item.artist}</Label>
                    <Text>{item.item.song}</Text>
                    <Duration>Price: {item.item.duration}</Duration>
                    <Button onClick={() => item.item.function(null)}>Go back</Button>
                </TextWrapper>
            </Wrapper>
        </>
    );
}