import { Transition } from "@headlessui/react"
import React, { useEffect, useState } from "react"

interface Props {
	label: any
	children: any
	className?: string
	position?: string
}

const Dropdown: React.FC<Props> = ({ label, children, className, position }) => {
	const [visible, setVisible] = useState(false)
	const toggle = () => setVisible(!visible)

	const buttonRef = React.createRef<any>()
	const popoverRef = React.createRef<HTMLDivElement>()

	// detect clicking outside the popover
	useEffect(() => {
		document.addEventListener('mousedown', handleDocumentClick)
		return () => document.removeEventListener('mousedown', handleDocumentClick)
	}, [ popoverRef ])

	const handleDocumentClick = (event: MouseEvent) => {
		if (!popoverRef.current) return
		const node = event.target as Node

		if (node === buttonRef.current) return
		if (!popoverRef.current.contains(node)) setVisible(false)
	}

	const animation = {
		enter: "transition ease-out duration-100",
		enterFrom: "transform opacity-0 scale-95",
		enterTo: "transform opacity-100 scale-100",
		leave: "transition ease-in duration-75",
		leaveFrom: "transform opacity-100 scale-100",
		leaveTo: "transform opacity-0 scale-95"
	}

	return (
		<div className='inline-block relative whitespace-nowrap'>
			<button id='dropdown-menu' onClick={toggle} ref={buttonRef} aria-expanded='false' aria-haspopup='true' className={className} children={label} />
			<div className={`absolute ${position}`} ref={popoverRef}>
				<Transition show={visible} {...animation} role='menu' aria-orientation='vertical' aria-labelledby='dropdown-menu'>
					<div className='border-primary bg-white rounded-md shadow-lg' children={children} />
				</Transition>
			</div>
		</div>
	)
}

export type DropdownProps = Props
export default Dropdown