import styled from "styled-components";
import { Button } from "../ItemPage/Itempage.styles";

export const CartContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    img {
        height: 300px;
        width: 550px;
        background-color: #fff;
        margin: 30px 0;
    }
    h1 {
    margin-bottom: 30px;
    }
`;

export const ButtonSuccess = styled(Button)`
    margin-top: 100px;
    width: 300px;
`;