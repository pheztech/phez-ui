import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

interface Props {
	selector: string
	children: any
}

const Portal: React.FC<Props> = ({ selector, children }) => {
	const ref = useRef<Element | null>()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector(selector)
		setMounted(true)
	}, [ selector ])

	return mounted && ref.current ? createPortal(children, ref.current) : null
}

export type PortalProps = Props
export default Portal