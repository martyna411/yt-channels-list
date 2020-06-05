const channelsMapper = {
	title: 'title',
	subscribers: 'subscriberCount',
	videos: 'videoCount',
	views: 'viewCount',
};

function sort(id, channels) {
	if (!id) {
		return [...channels];
	}

	const mapped = channelsMapper[id];

	return channels.sort((a, b) =>
		id === 'title'
			? a.title.localeCompare(b.title)
			: a.statistics[mapped] - b.statistics[mapped]
	);
}

function resetSorter(sorterContainer) {
	const radioInput = sorterContainer.querySelector(
		"input[name='sort']:checked"
	);

	if (radioInput) {
		radioInput.checked = false;
	}
}

export { sort, resetSorter };
