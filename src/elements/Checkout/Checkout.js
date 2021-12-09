import {
    CartContainer,
    TitleStyled,
    FormStyled,
    ButtonForm,
    InputContainer,
    ButtonContainer,
} from "./Checkout.styles";
import { Formik } from "formik";
import { useHistory } from "react-router";
import { Input } from "../Input/Input";
import * as Yup from "yup";

export function Checkout() {
    let history = useHistory();

    const OrderSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Your firstname is too short")
            .max(30, "Your firstname is too long")
            .required("This field can't be empty"),
        lastName: Yup.string()
            .min(2, "Your lastname is too short")
            .max(30, "Your lastname is too long")
            .required("This field can't be empty"),
        email: Yup.string().email("This email is invalid").required("This field can't be empty"),
        phone: Yup.string()
            .matches(
                /^((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))$/g,
                "This phone number is invalid"
            )
            .required("This field can't be empty"),
        address: Yup.string()
            .min(2, "Your address is too short")
            .max(100, "Your address is too long")
            .required("This field can't be empty"),
    });

    return (
        <CartContainer>
            <TitleStyled>Checkout</TitleStyled>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: "",
                }}
                validationSchema={OrderSchema}
                onSubmit={() => {
                    history.push("/success");
                }}
            >
                {({ handleSubmit }) => (
                    <FormStyled onSubmit={handleSubmit}>
                        <InputContainer>
                            <Input title="First Name" name="firstName" type="text"/>
                            <Input title="Last Name" name="lastName" type="text"/>
                            <Input title="Email" name="email" type="email"/>
                            <Input title="Phone" name="phone" type="text"/>
                            <Input title="Address" name="address" type="text"/>
                        </InputContainer>
                        <ButtonContainer>
                            <ButtonForm onClick={history.goBack}>Go Back</ButtonForm>
                            <ButtonForm onClick={handleSubmit}>Continue</ButtonForm>
                        </ButtonContainer>
                    </FormStyled>
                )}
            </Formik>
        </CartContainer>
    );
}