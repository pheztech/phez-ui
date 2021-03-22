import { Transition } from "@headlessui/react";
import React from "react";
import Paper from "./Paper";
import Portal from "./Portal";

interface Props {
	open: boolean,
	children: any
}

const Modal: React.FC<Props> = ({ open, children }) => {
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

	return (
		<Portal selector='#__next'>
			<Transition show={open}>
				<Transition.Child {...bgAnimation}>
					<div className='absolute bg-black bg-opacity-50 top-0 bottom-0 right-0 left-0 transition-opacity'></div>
				</Transition.Child>
				<Transition.Child {...fgAnimation}>
					<div className='absolute top-1/4 left-4 sm:left-1/4 right-4 sm:right-1/4'>
						<Paper children={children} />
					</div>
				</Transition.Child>
			</Transition>
		</Portal>
	)
}

export type ModalProps = Props
export default Modal