import {ButtonForm, ButtonWrapper, ItemsWrapper, Label, Wrapper} from "./Cart.styles";
import {useSelector} from "react-redux";
import {CartItem} from "../CartItem/CartItem";
import { useHistory  } from "react-router";

export function Cart() {
    const items = useSelector((state) => state.items);
    let history = useHistory();

    return (
        <Wrapper>
            <Label>Shopping cart</Label>
            <ItemsWrapper>
                {items.map((item) => (
                    <CartItem key={item.song} song={item.song} duration={item.duration} clipAmount={item.clipAmount}/>))}
            </ItemsWrapper>
            <ButtonWrapper>
            <ButtonForm onClick={history.goBack}>Back to Catalog</ButtonForm>
                <ButtonForm onClick={() => history.push("/checkout")}>Continue</ButtonForm>
            </ButtonWrapper>
        </Wrapper>
    );
}