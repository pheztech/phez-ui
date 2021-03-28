import React from "react";
import { FieldProps } from "formik";
import { NumberFormatProps } from "react-number-format";
interface Props extends FieldProps, Omit<NumberFormatProps, 'form'> {
    label?: string;
    placeholder?: string;
    className?: string;
    asNumber?: boolean;
    adornment?: any;
    formatValue?: (value: any) => any;
    onSetValue?: (value: any) => any;
}
declare const NumberField: React.FC<Props>;
export declare type NumberFieldProps = Props;
export default NumberField;
