import {
    Image,
    Text, 
    Wrapper
} from "./HomeItem.styles";

export function HomeItem({image, artist, song}) {
    return (
        <Wrapper>
            <Image src={image}/>
            <Text>{artist}</Text>
            <Text>{song}</Text>
        </Wrapper>
    );
}