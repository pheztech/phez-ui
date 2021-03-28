import React from "react"
import { useState } from "react"
import Table, { TableProps } from "./Table"

interface Props extends TableProps {
	rowCount?: number
}

const DataGrid: React.FC<Props> = ({ columns, rows, rowCount, ...props }) => {
	const rowLength = rowCount ?? rows.length
	const pageCount = Math.ceil(rows.length / rowLength)

	const [page, setPage] = useState(0)

	const start = () => setPage(0)
	const next = () => setPage(page + 1)
	const prev = () => setPage(page - 1)
	const end = () => setPage(pageCount - 1)

	const renderFooter = () => (
		<tr hidden={pageCount === 1}>
			<td colSpan={columns.length} className='px-2 border-t border-gray-300'>
				<div className='flex justify-end items-center p-1 space-x-1'>
					<button onClick={start} className='datagrid-page-button'>
						<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
						</svg>
					</button>
					<button onClick={prev} className='datagrid-page-button'>
						<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
					</button>
					{Array.from(Array(pageCount).keys()).map((e) => <button key={e} onClick={() => setPage(e)} className={`p-2 rounded-md text-base ${e === page ? 'bg-gray-300' : 'hover:bg-gray-100 active:bg-gray-300 hover:text-gray-900'}`}><div className='block w-5 h-5'>{e + 1}</div></button>)}
					<button onClick={next} className='datagrid-page-button'>
						<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
						</svg>
					</button>
					<button onClick={end} className='datagrid-page-button'>
						<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
							<path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
						</svg>
					</button>
				</div>
			</td>
		</tr>
	)

	return <Table {...props} columns={columns} rows={rows.slice(page * rowLength, page * rowLength + rowLength)} footer={renderFooter()} />
}

export default DataGrid