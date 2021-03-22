interface Column {
	key: string
	name?: string
	style?: string
	render?: (e: any) => any
}

interface Props {
	className?: string,
	columns: Column[]
	rows: any[]
	footer?: any
}

const Table: React.FC<Props> = ({ className, columns, rows, footer }) => {
	const headerStyle = (i: number) => `${i === columns.length - 1 ? '' : 'border-r'} ${columns[i].style ?? ''} border-b border-gray-300`
	const bodyStyle = (r: number, c: number) => `${c === columns.length - 1 ? '' : 'border-r'} ${r === rows.length - 1 ? '' : 'border-b'} ${columns[c].style ?? ''} border-gray-300`

	const renderBody = (row: any, column: Column) => {
		let v = row[column.key as keyof typeof row]
		return column.render?.(v) ?? v
	}

	return (
		<table className={className}>
			<thead>
				<tr children={columns.map((e, i) => <th className={headerStyle(i)} key={i}>{e.name}</th>)} />
			</thead>
			<tfoot children={footer} />
			<tbody children={rows.map((d, r) => <tr key={r}>{columns.map((e, c) => <td className={bodyStyle(r, c)} key={c}>{renderBody(d, e)}</td>)}</tr>)} />
		</table>
	)
}

export type ColDef = Column
export type TableProps = Props
export default Table