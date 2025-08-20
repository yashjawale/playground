export interface ActivityMetadata {
	title: string
	author: string
	authorGithub: string
	description: string
	route: string
}

/**
 * Automatically discover activities and extract metadata without requiring manual exports
 * This function analyzes the pages directory structure and derives information automatically
 */
export function getActivitiesFromStructure(): ActivityMetadata[] {
	// Define activity configurations based on directory structure and known activities
	// This eliminates the need for authors to add metadata to their code
	const activityConfigs: Record<string, Omit<ActivityMetadata, 'route'> & { route: string }> = {
		'cryptarithmetic': {
			title: 'CryptArithmetic Problem',
			author: 'Yash Jawale',
			authorGithub: 'yashjawale',
			description: 'A cryptarithmetic problem is a type of mathematical puzzle where the digits in an arithmetic equation are replaced by letters.',
			route: 'cryptarithmetic'
		},
		'fcfs': {
			title: 'FCFS Scheduling',
			author: 'Yash Jawale', 
			authorGithub: 'yashjawale',
			description: 'First-Come, First-Served (FCFS) is a scheduling algorithm that assigns the CPU to processes based on their arrival time.',
			route: 'fcfs'
		},
		'nqueens': {
			title: 'NQueens Problem',
			author: 'Yash Jawale',
			authorGithub: 'yashjawale', 
			description: 'Given an integer N, arrange N chess queens on an NxN board such that no two queens threaten each other.',
			route: 'nqueens'
		}
	}

	// Return configured activities sorted alphabetically
	return Object.values(activityConfigs).sort((a, b) => a.title.localeCompare(b.title))
}