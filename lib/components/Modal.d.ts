import React from "react";
interface Props {
    open: boolean;
    onClose: () => void;
    children: any;
}
declare const Modal: React.FC<Props>;
export declare type ModalProps = Props;
export default Modal;
