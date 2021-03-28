import { Listbox, Transition } from "@headlessui/react"
import { getIn, useFormikContext } from "formik"
import React from "react"

interface Option {
	value: any
	label: any
}

interface Props {
	label: string
	name: string
	options: Option[]
	className?: string
}

const SelectField: React.FC<Props> = ({ label, name, options, className }) => {
	const { values, touched, setFieldValue } = useFormikContext<any>()
	const selectedValue = getIn(values, name)

	const labelStyle = `inline-block relative whitespace-nowrap ${className}`
	const buttonStyle = 'border-primary focus:border-blue-500 rounded-md px-2 py-1 text-base text-left outline-none w-full'
	const optionsStyle = 'absolute border-primary bg-white rounded-md shadow-lg mt-1 py-2 outline-none min-w-full z-10 overflow-hidden'

	const animation = {
		enter: 'transition ease-out duration-100',
		enterFrom: 'transform opacity-0 scale-95',
		enterTo: 'transform opacity-100 scale-100',
		leave: 'transition ease-in duration-75',
		leaveFrom: 'transform opacity-100 scale-100',
		leaveTo: 'transform opacity-0 scale-95'
	}

	// transition is a little buggy since its trying to keep the dropdown open after a button is pressed (which we dont want anyways)
	return (
		<label className={labelStyle}>
			<p className='text-sm font-medium text-gray-700'>{label}</p>
			<Listbox value={selectedValue} onChange={e => setFieldValue(name, e === selectedValue ? undefined : e)}>
				{({ open }) => (
					<>
						<Listbox.Button className={buttonStyle}>{selectedValue ?? '-'}</Listbox.Button>
						<Transition show={open} {...animation} role='menu' aria-orientation='vertical' aria-labelledby='dropdown-menu'>
							<Listbox.Options className={optionsStyle} static>
								<div className='overflow-y-scroll max-h-60'>
									{options.map((e, i) => (
										<Listbox.Option className={`py-2 px-4 ${e.value === selectedValue ? 'bg-gray-300' : 'hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-300'}`} key={i} value={e.value}>
											{e.label}
										</Listbox.Option>
									))}
								</div>
							</Listbox.Options>
						</Transition>
					</>
				)}
			</Listbox>
		</label>
	)
}

export type SelectFieldProps = Props
export default SelectField