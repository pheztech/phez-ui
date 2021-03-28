import React from "react";
interface Option {
    value: any;
    label: any;
}
interface Props {
    label: string;
    name: string;
    options: Option[];
    className?: string;
}
declare const SelectField: React.FC<Props>;
export declare type SelectFieldProps = Props;
export default SelectField;
