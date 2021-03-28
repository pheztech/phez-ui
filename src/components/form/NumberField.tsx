import { FieldProps, getIn } from "formik"
import NumberFormat, { NumberFormatProps, NumberFormatValues } from "react-number-format"

interface Props extends FieldProps, Omit<NumberFormatProps, 'form'> {
	label?: string
	placeholder?: string
	className?: string
	asNumber?: boolean
	adornment?: any
	formatValue?: (value: any) => any
	onSetValue?: (value: any) => any
}

const NumberField: React.FC<Props> = ({label, className, asNumber, formatValue, onSetValue, form, field, adornment, ...props}) => {
	const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name)
	const style = `border focus:border-blue-500 rounded-md px-2 py-1 text-base outline-none w-full ${errorText ? 'border-red-500' : 'border-gray-300'}`
	const { onChange, value, ...fieldProps } = field

	const handleValueChange = (e: NumberFormatValues) => {
		const value = asNumber ? e.floatValue : e.value
		form.setFieldValue(field.name, onSetValue?.(value) ?? value)
	}

	return (
		<label className={className}>
			<p className='text-sm font-medium text-gray-700'>{label}</p>
			<div className='relative flex justify-end items-center'>
				<NumberFormat className={style} {...props} {...fieldProps} value={formatValue?.(value) ?? value} onValueChange={handleValueChange} />
				{adornment && (<div className='aboslute mx-2 text-sm font-medium text-gray-500'>{adornment}</div>)}
			</div>
			<p className='text-xs text-red-500'>{errorText}</p>
		</label>
	)
}

export type NumberFieldProps = Props
export default NumberField