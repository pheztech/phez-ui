import React from "react";
import { ButtonHTMLAttributes } from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    pending?: boolean;
}
declare const Button: React.FC<Props>;
export declare type ButtonProps = Props;
export default Button;
