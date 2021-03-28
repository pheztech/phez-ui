import React from "react";
interface Column {
    key: string;
    name?: string;
    style?: string;
    render?: ((field: any) => any) | ((field: any, row: any) => any);
}
interface Props {
    className?: string;
    columns: Column[];
    hideColumnBorder?: boolean;
    rows: any[];
    footer?: any;
    selectable?: boolean;
    onClickRow?: (row: any) => void;
}
declare const Table: React.FC<Props>;
export declare type ColDef = Column;
export declare type TableProps = Props;
export default Table;
