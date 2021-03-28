import React from "react"
import { FieldProps } from "formik";

interface Props extends FieldProps {
	label?: string
}

const Checkbox: React.FC<Props> = ({ label, form, field, ...props }) => {
	const { value, ...fieldProps } = field

	return (
		<label className='inline-flex items-center'>
			<div className='relative flex justify-center items-center'>
				<input type='checkbox' className='checkbox-primary' checked={value} {...fieldProps} {...props} />
				<svg className='absolute w-4 h-4 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
				</svg>
			</div>
			<span className='ml-2 text-sm' children={label} />
		</label>
	)
}

export type CheckboxProps = Props
export default Checkbox