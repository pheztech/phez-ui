import React from "react";
import { FieldProps } from "formik";
interface Props extends FieldProps {
    label?: string;
}
declare const Checkbox: React.FC<Props>;
export declare type CheckboxProps = Props;
export default Checkbox;
