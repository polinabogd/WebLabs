import {Image, Label, Text, TextWrapper, Wrapper, Duration, Button, AddButton} from "./Itempage.styles";
import {useDispatch} from "react-redux";
import {addItem} from "../redux/action";

export function ItemPage(item) {
    const dispatch = useDispatch();

    function addToCart(song, duration){
        dispatch(addItem({
            song: song,
            duration: duration
        }))
    }

    return (
        <>
            <Wrapper>
                <Image src={item.item.image}/>
                <TextWrapper>
                    <Label>{item.item.artist}</Label>
                    <Text>{item.item.song}</Text>
                    <Duration>Duration: {item.item.duration}</Duration>
                    <Button onClick={() => item.item.function(null)}>Go back</Button>
                    <AddButton onClick={() => addToCart(item.item.song, item.item.duration)}>Add to cart</AddButton>
                </TextWrapper>
            </Wrapper>
        </>
    );
}