import React from "react";
import { FieldProps } from "formik";
interface Props extends FieldProps {
    label: string;
    placeholder?: string;
    className?: string;
}
declare const TextArea: React.FC<Props>;
export declare type TextAreaProps = Props;
export default TextArea;
