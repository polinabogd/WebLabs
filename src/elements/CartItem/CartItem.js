import {
    Wrapper,
    Image,
    Text,
    Duration,
    Button,
    Counter,
    CounterWrapper,
    ButtonWrapper
} from "./CartItem.styles";
import {CloseSquareOutlined} from '@ant-design/icons'
import clip from "../../images/miley.jpg"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteItem} from "../redux/action";

export function CartItem(item) {
    const [clipsAmount, updateAmount] = useState(1);
    const dispatch = useDispatch();

    function decreaseByOne() {
        if (clipsAmount > 1) updateAmount(clipsAmount - 1);
    }
    function increaseByOne() {
        updateAmount(clipsAmount + 1);
    }
    function removeItem(artist) {
        dispatch(deleteItem({artist}))
    }
    function returnImage() {
        return clip;
    }
    return (
        <>
            <Wrapper>
                <Image src={returnImage(item.artist)}/>
                <Text>{item.artist}</Text>
                <CounterWrapper>
                    <ButtonWrapper>
                        <Button onClick={decreaseByOne}><div style={{fontWeight: 600, fontSize: 16}}>-</div></Button>
                        <Counter>{clipsAmount}</Counter>
                        <Button onClick={increaseByOne}><div style={{fontWeight: 600, fontSize: 16}}>+</div></Button>
                    </ButtonWrapper>
                </CounterWrapper>
                <Duration>{item.duration * clipsAmount}</Duration>
                <CloseSquareOutlined style={{alignSelf: "flex-start", margin: "10px"}} onClick={() => removeItem(item.artist)}/>
            </Wrapper>
        </>
    );
}