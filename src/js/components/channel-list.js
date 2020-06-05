import { filter, resetFilter } from '../services/filter-service.js';
import { resetSorter, sort } from '../services/sorter-service.js';
import { APP } from '../settings.js';
import { clearContainer } from '../utils/helper.js';
import { getChannels } from '../utils/repository.js';

const { FILTER_CHANGED, SORTER_CHANGED, SORTER_BUTTON_CLICKED } = APP.EVENTS;
const { FILTER, SORTER, CHANNEL_LIST, CHANNEL_TILE } = APP.WEB_COMPONENTS;

class ChannelList extends HTMLElement {
	constructor() {
		super();

		const filterElement = document.querySelector(FILTER);
		const sorterElement = document.querySelector(SORTER);

		filterElement.addEventListener(FILTER_CHANGED, ({ detail }) => {
			this.filterBy = detail;
			this.filterAndSort();
		});

		sorterElement.addEventListener(SORTER_CHANGED, ({ detail }) => {
			this.sortBy = detail;
			this.filterAndSort();
		});

		sorterElement.addEventListener(SORTER_BUTTON_CLICKED, () => {
			resetSorter(sorterElement);
			resetFilter(filterElement);
			this.render();
		});
	}

	filterAndSort() {
		let channelsToRender = [];

		channelsToRender = filter(this.filterBy, this.channels);
		channelsToRender = sort(this.sortBy, channelsToRender);

		this.render(channelsToRender);
	}

	connectedCallback() {
		this.fetchChannels();
	}

	async fetchChannels() {
		this.channels = await getChannels();
		this.render();
	}

	render(channels = this.channels) {
		const container = document.querySelector(CHANNEL_LIST);
		clearContainer(container);

		const channelsList = channels.map((channel) => {
			const channelElement = document.createElement(CHANNEL_TILE);
			channelElement.channel = channel;
			return channelElement;
		});

		container.append(...channelsList);
	}
}

customElements.define(CHANNEL_LIST, ChannelList);
