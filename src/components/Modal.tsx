import { Transition } from "@headlessui/react";
import React, { useEffect } from "react";
import Paper from "./Paper";
import Portal from "./Portal";

interface Props {
	open: boolean,
	onClose: () => void
	children: any
}

const Modal: React.FC<Props> = ({ open, onClose, children }) => {
	const bgRef = React.createRef<HTMLDivElement>()

	useEffect(() => {
		document.addEventListener('mousedown', handleDocumentClick)
		return () => document.removeEventListener('mousedown', handleDocumentClick)
	}, [ bgRef ])
	
	const handleDocumentClick = (event: MouseEvent) => {
		if (!bgRef.current) return
		const node = event.target as Node

		if (node === bgRef.current) onClose()
	}

	const bgAnimation = {
		enter: 'transition-opacity ease-out duration-300',
		enterFrom: 'opacity-0',
		enterTo: 'opacity-100',
		leave: 'transition-opacity ease-in duration-200',
		leaveFrom: 'opacity-100',
		leaveTo: 'opacity-0'
	}

	const fgAnimation = {
		enter: 'transition ease-out duration-300 transform',
		enterFrom: 'opacity-0 translate-y-4 sm:scale-95',
		enterTo: 'opacity-100 translate-y-0 sm:scale-100',
		leave: 'transition-opacity ease-in duration-200 transform',
		leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
		leaveTo: 'opacity-0 translate-y-4 sm:scale-95'
	}

	// overflow-hidden isnt enabled until the sm breakpoint is reached so scrolling will still work on smaller screens
	return (
		<Portal selector='#__next'>
			<Transition className='fixed inset-0 flex flex-wrap justify-center' show={open}>
				<Transition.Child className='absolute inset-0' {...bgAnimation}>
					<div ref={bgRef} className='bg-black bg-opacity-50 transition-opacity h-full'></div>
				</Transition.Child>
				<Transition.Child className='absolute self-center w-full px-4 sm:px-10 md:w-3/4 lg:w-3/5 xl:w-2/5' {...fgAnimation}>
					<Paper children={children} />
				</Transition.Child>
			</Transition>
		</Portal>
	)
}

export type ModalProps = Props
export default Modal