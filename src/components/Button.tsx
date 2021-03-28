import React from "react"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	pending?: boolean
}

const Button: React.FC<Props> = ({ pending, className, children, ...props }) => {
	if (pending) props.disabled = pending

	var style = 'relative flex justify-center'
	if (className) style += ' ' + className

	return (
		<button className={style} {...props}>
			<span className={`absolute ${pending ? 'block' : 'hidden'}`}>
				<svg className='animate-spin h-5 w-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
					<circle className='opacity-50' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
					<path fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
				</svg>
			</span>
			<span className={pending ? 'invisible' : 'visible'} children={children} />
		</button>
	)
}

export type ButtonProps = Props
export default Button