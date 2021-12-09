import {
    ErrorForm,
    InputContainer,
    InputForm,
} from "../Input/Input.styles";
import { Field, ErrorMessage } from "formik";

export function Input({title, name, type}) {
    return (
        <InputContainer>
            {title}:
            <Field id={name} name={name} type={type} as={InputForm}/>
            <ErrorForm>
                <ErrorMessage name={name}/>
            </ErrorForm>
        </InputContainer>
    );
}