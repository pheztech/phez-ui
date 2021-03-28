import React from "react";
import { FieldProps } from "formik";
import { InputHTMLAttributes } from "react";
interface Props extends FieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> {
    label?: string;
    placeholder?: string;
    className?: string;
}
declare const TextField: React.FC<Props>;
export declare type TextFieldProps = Props;
export default TextField;
