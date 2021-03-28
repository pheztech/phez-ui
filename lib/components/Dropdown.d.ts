import React, { ButtonHTMLAttributes } from "react";
interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'onClick' | 'ref' | 'children'> {
    label: any;
    children: any;
    position?: string;
    fullWidth?: boolean;
}
declare const Dropdown: React.FC<Props>;
export declare type DropdownProps = Props;
export default Dropdown;
