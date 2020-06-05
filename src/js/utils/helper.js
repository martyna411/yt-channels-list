import { APP } from '../settings.js';

const { LOCALE } = APP.LOCALIZATION;

function toLocaleString(value) {
	return (+value).toLocaleString(LOCALE);
}

function clearContainer(container) {
	[...container.children].forEach((node) => {
		container.removeChild(node);
	});
}

export { toLocaleString, clearContainer };
