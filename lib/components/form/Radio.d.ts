import React from "react";
import { FieldProps } from "formik";
interface Props extends FieldProps {
    label?: string;
}
declare const Radio: React.FC<Props>;
export declare type RadioProps = Props;
export default Radio;
