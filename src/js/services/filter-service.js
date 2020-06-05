function filter(searchString, channels) {
	if (!searchString) {
		return [...channels];
	}

	return channels.filter((channel) =>
		channel.title.toLowerCase().includes(searchString.toLowerCase())
	);
}

function resetFilter(filterComponent) {
	const input = filterComponent.querySelector("input");
	input.value = null;
}

export { filter, resetFilter };
