import { FieldProps } from "formik";
import React from "react";
interface Option {
    value: any;
    label: any;
}
interface Props extends FieldProps {
    label: string;
    options: Option[];
    className?: string;
}
declare const SelectField: React.FC<Props>;
export declare type SelectFieldOption = Option;
export declare type SelectFieldProps = Props;
export default SelectField;
