import React from "react"
import { FieldProps, getIn } from "formik"

interface Props extends FieldProps {
	label?: string
	placeholder?: string
	className?: string
}

const TimeField: React.FC<Props> = ({ label, className, form, field, ...props }) => {
	const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name)
	const style = `border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none w-full ${errorText ? 'border-red-500' : 'border-gray-300'}`

	const getOffset = (date: Date | null) => date && !isNaN(date.getTime()) ? date.getUTCHours() * 60 * 60 + date.getUTCMinutes() * 60 : 0
	const date = new Date(Date.UTC(0, 0, 1, 0, 0, field.value))

	return (
		<label className={className}>
			<p className='text-sm font-medium text-gray-700'>{label}</p>
			<input className={style} type='time' name={field.name} {...props} value={date.toISOString().substring(11, 16)} onChange={e => form.setFieldValue(field.name, getOffset(e.target.valueAsDate))} onBlur={field.onBlur} />
			<p className='text-xs text-red-500'>{errorText}</p>
		</label>
	)
}

export type TimeFieldProps = Props
export default TimeField