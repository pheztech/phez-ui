import { FieldProps } from "formik"

interface Props extends FieldProps {
	label?: string
}

const Radio: React.FC<Props> = ({ label, form, field, ...props }) => {
	return (
		<label className='inline-flex items-center'>
			<input type='radio' className='radio-primary' {...field} {...props} />
			<span className='ml-2 text-sm' children={label} />
		</label>
	)
}

export type RadioProps = Props
export default Radio