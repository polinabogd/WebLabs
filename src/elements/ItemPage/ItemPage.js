import {Image, Label, Text, TextWrapper, Wrapper, Price, Button} from "./Itempage.styles";

export function ItemPage(item) {
    return (
        <>
            <Wrapper>
                <Image src={item.item.image}/>
                <TextWrapper>
                    <Label>{item.item.artist}</Label>
                    <Text>{item.item.song}</Text>
                    <Price>Price: {item.item.duration}</Price>
                    <Button onClick={() => item.item.function(null)}>Go back</Button>
                </TextWrapper>
            </Wrapper>
        </>
    );
}