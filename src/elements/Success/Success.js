import { useHistory } from "react-router";
import {
    CartContainer,
    ButtonSuccess,
} from "../Success/Success.styles";
import success from "../../images/success.jpg";

export function Success() {
    let history = useHistory();

    return (
        <CartContainer>
            <img src={success} alt="Success mark"/>
            <h1>Success</h1>
            <h3>Your order was sent to processing!</h3>
            <h3>Check your email box for further information</h3>
            <ButtonSuccess onClick={() => history.push("/catalog")}>
                Go back to Catalog
            </ButtonSuccess>
        </CartContainer>
    );
}