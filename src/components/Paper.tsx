interface Props {
	className?: string
	children?: any
}

const Paper: React.FC<Props> = ({ className, children }) => {
	var style = 'border-primary rounded-md bg-white'
	if (className) style += ' ' + className

	return (<div className={style} children={children} />)
}

export type PaperProps = Props
export default Paper