import { FieldProps, getIn } from "formik"

interface Props extends FieldProps {
	label: string
	placeholder?: string
	className?: string
}

const TextField: React.FC<Props> = ({ label, className, form, field, ...props }) => {
	const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name)
	const style = `border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none ${className} ${errorText ? 'border-red-500' : 'border-gray-300'}`

	return (
		<label>
			<p className='text-sm font-medium text-gray-700'>{label}</p>
			<input className={style} {...props} {...field} />
			<p className='text-xs text-red-500'>{errorText}</p>
		</label>
	)
}

export type TextFieldProps = Props
export default TextField