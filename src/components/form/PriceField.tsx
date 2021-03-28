import React from "react"
import { FieldProps } from "formik"
import NumberField from "./NumberField"

interface Props extends FieldProps {
	label?: string
	placeholder?: string
	className?: string
}

const PriceField: React.FC<Props> = ({ ...props }) => {
	return <NumberField {...props} prefix='$' decimalScale={2} fixedDecimalScale asNumber formatValue={(e: number) => e / 100} onSetValue={(e: number) => e * 100} />
}

export type PriceFieldProps = Props
export default PriceField