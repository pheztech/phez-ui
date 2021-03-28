import React from "react";
import { FieldProps } from "formik";
interface Props extends FieldProps {
    label?: string;
    placeholder?: string;
    className?: string;
}
declare const TimeField: React.FC<Props>;
export declare type TimeFieldProps = Props;
export default TimeField;
