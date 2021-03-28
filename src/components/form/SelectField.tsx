import { FieldProps, getIn } from "formik"
import React from "react"
import Dropdown from "../Dropdown"

interface Option {
	value: any
	label: any
}

interface Props extends FieldProps {
	label: string
	options: Option[]
	className?: string
}

const SelectField: React.FC<Props> = ({ label, options, className, form, field, ...props }) => {
	const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name)

	const buttonStyle = `border ${errorText ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 rounded-md px-2 py-1 text-base text-left outline-none w-full`
	const optionsStyle = 'absolute border-primary bg-white rounded-md shadow-lg mt-1 py-2 outline-none min-w-full z-10 overflow-hidden'

	return (
		<label className={className}>
			<p className='text-sm font-medium text-gray-700'>{label}</p>
			<Dropdown name={field.name} label={field.value ?? '-'} className={buttonStyle} fullWidth onBlur={field.onBlur}>
				<div className={optionsStyle}>
					<div className='overflow-y-scroll max-h-40 flex flex-col w-full'>
						{options.map((e, i) => (
							<button className={`py-2 px-4 text-left ${e.value === field.value ? 'bg-gray-300' : 'hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-300'}`} key={i} value={e.value} name={field.name} onClick={field.onChange}>
								{e.label}
							</button>
						))}
					</div>
				</div>
			</Dropdown>
			<p className='text-xs text-red-500'>{errorText}</p>
		</label>
	)
}

export type SelectFieldOption = Option
export type SelectFieldProps = Props
export default SelectField