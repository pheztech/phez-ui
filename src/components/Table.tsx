import { getIn } from "formik"

interface Column {
	key: string
	name?: string
	style?: string
	render?: ((field: any) => any) | ((field: any, row: any) => any)
}

interface Props {
	className?: string,
	columns: Column[]
	hideColumnBorder?: boolean
	rows: any[]
	footer?: any,
	selectable?: boolean
	onClickRow?: (row: any) => void
}

const Table: React.FC<Props> = ({ className, columns, hideColumnBorder, rows, footer, selectable, onClickRow }) => {
	const headerStyle = (i: number) => `${i === columns.length - 1 || hideColumnBorder ? '' : 'border-r'} ${columns[i].style ?? ''} border-b border-gray-300`
	const bodyStyle = (r: number, c: number) => `${c === columns.length - 1 || hideColumnBorder ? '' : 'border-r'} ${r === rows.length - 1 ? '' : 'border-b'} ${columns[c].style ?? ''} border-gray-300`
	const rowStyle = selectable ? 'hover:bg-gray-100 active:bg-gray-200' : ''

	const renderBody = (row: any, column: Column) => {
		const v = getIn(row, column.key)
		return column.render?.(v, row) ?? v
	}

	return (
		<table className={className}>
			<thead>
				<tr children={columns.map((e, i) => <th className={headerStyle(i)} key={i}>{e.name}</th>)} />
			</thead>
			<tfoot children={footer} />
			<tbody children={rows.map((d, r) => <tr key={r} className={rowStyle} onClick={() => onClickRow?.(d)}>{columns.map((e, c) => <td className={bodyStyle(r, c)} key={c}>{renderBody(d, e)}</td>)}</tr>)} />
		</table>
	)
}

export type ColDef = Column
export type TableProps = Props
export default Table