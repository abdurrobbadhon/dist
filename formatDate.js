function formatDate(dateString) {
	const date = new Date(dateString)
	const now = new Date()
	const elapsedTime = now - date
	const seconds = Math.floor(elapsedTime / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	const days = Math.floor(hours / 24)

	const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

	if (seconds < 60) {
		return 'just now'
	} else if (minutes < 60) {
		return rtf.format(-minutes, 'minute')
	} else if (hours < 24) {
		return rtf.format(-hours, 'hour')
	} else {
		return rtf.format(-days, 'day')
	}
}
