import React from "react";
import { FieldProps } from "formik";
interface Props extends FieldProps {
    label?: string;
    placeholder?: string;
    className?: string;
}
declare const PriceField: React.FC<Props>;
export declare type PriceFieldProps = Props;
export default PriceField;
