interface Props {
	children: any
}

const Paper: React.FC<Props> = ({ children }) => {
	return (<div className='border-primary rounded-md bg-white' children={children} />)
}

export type PaperProps = Props
export default Paper