import React from "react";
import { TableProps } from "./Table";
interface Props extends TableProps {
    rowCount?: number;
}
declare const DataGrid: React.FC<Props>;
export default DataGrid;
