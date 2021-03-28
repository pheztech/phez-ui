import React from "react"
import { FieldProps, getIn } from "formik"
import { InputHTMLAttributes } from "react"

interface Props extends FieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> {
	label?: string
	placeholder?: string
	className?: string
}

const TextField: React.FC<Props> = ({ label, className, form, field, ...props }) => {
	const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name)
	const style = `border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none w-full ${errorText ? 'border-red-500' : 'border-gray-300'}`

	return (
		<label className={className}>
			<p className='text-sm font-medium text-gray-700'>{label}</p>
			<input type='text' className={style} {...props} {...field} />
			<p className='text-xs text-red-500'>{errorText}</p>
		</label>
	)
}

export type TextFieldProps = Props
export default TextField