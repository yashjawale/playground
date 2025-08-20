export interface ActivityMetadata {
	title: string
	author: string
	authorGithub: string
	description: string
	route: string
}

/**
 * Dynamically collect all activities from the pages directory
 * This function imports all activity metadata to automatically populate the homepage
 */
export async function getActivities(): Promise<ActivityMetadata[]> {
	const activities: ActivityMetadata[] = []

	// Import metadata from each activity
	// Using dynamic imports to load metadata from each activity's index.astro file
	try {
		const cryptarithmetic = await import('../pages/cryptarithmetic/index.astro')
		if (cryptarithmetic.metadata) {
			activities.push(cryptarithmetic.metadata)
		}
	} catch {
		// Activity not found or failed to load
	}

	try {
		const nqueens = await import('../pages/nqueens/index.astro')
		if (nqueens.metadata) {
			activities.push(nqueens.metadata)
		}
	} catch {
		// Activity not found or failed to load
	}

	try {
		const fcfs = await import('../pages/fcfs/index.astro')
		if (fcfs.metadata) {
			activities.push(fcfs.metadata)
		}
	} catch {
		// Activity not found or failed to load
	}

	return activities
}

/**
 * Alternative approach using Astro.glob for automatic discovery
 * This can be used if the above approach doesn't work due to Astro limitations
 */
export function getActivitiesFromGlob(activityFiles: { metadata?: ActivityMetadata }[]): ActivityMetadata[] {
	const activities: ActivityMetadata[] = []
	
	for (const file of activityFiles) {
		if (file.metadata) {
			activities.push(file.metadata)
		}
	}
	
	return activities
}