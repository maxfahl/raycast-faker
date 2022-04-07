export interface SubListProps {
	onCopyAction: (value: string) => void
}

interface CopyActionItemVariation {
	name: string
	args: any[]
}

export interface CopyActionItem {
	name: string
	generate: (...args: any[]) => string
	variations?: CopyActionItemVariation[]
}

import NameList from './name-list'

export {NameList}
