import { APP } from '../settings.js';

const { CHANNELS_END_POINT } = APP.API;

async function getChannels() {
	try {
		return await fetch(CHANNELS_END_POINT).then((result) => result.json());
	} catch (error) {
		console.error(error);
	}
}

export { getChannels };
