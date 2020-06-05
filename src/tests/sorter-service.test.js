import { resetSorter, sort } from '../js/services/sorter-service.js';
import { APP } from '../js/settings.js';

const { SORTER } = APP.WEB_COMPONENTS;

describe('sorter-service.js file tests', () => {
	describe('Tests resetSorter function', () => {
		const sorterElement = `
		<ui-sorter>
			<div class='sort'>
				<h3 class='sort__header'>Sort channels by:</h3>
					<ul class='sort__options'>
						<li>
							<input
								class='choice choice--radio'
								name='sort'
								type='radio'
								id='title'
								checked
								/>
							<label class='choice__label' for='title'>
								title
							</label>
						</li>
					</ul>
				<button class='button'>Clear</button>
			</div>
		</ui-sorter>`;

		it('Resets input type radio', () => {
			document.body.innerHTML = sorterElement;

			const element = document.querySelector(SORTER);
			resetSorter(element);

			const radio = document.querySelector("input[name='sort']:checked");
			expect(radio).toBeNull();
		});
	});

	describe('Tests sort function', () => {
		const channelsList = [
			{
				title: 'Fun Fun Function',
				statistics: {
					viewCount: '7261372',
					subscriberCount: '180691',
					videoCount: '189',
				},
			},
			{
				title: 'Google Chrome Developers',
				statistics: {
					viewCount: '21089248',
					subscriberCount: '260317',
					videoCount: '796',
				},
			},
			{
				title: 'DevTips',
				statistics: {
					viewCount: '13948443',
					subscriberCount: '306828',
					videoCount: '329',
				},
			},
		];

		it('Sorts by: null', () => {
			const received = sort(null, channelsList);
			expect(received).toEqual(channelsList);
		});

		it('Sorts by title', () => {
			const expected = [
				{
					title: 'DevTips',
					statistics: {
						viewCount: '13948443',
						subscriberCount: '306828',
						videoCount: '329'
					}
				},
				{
					title: 'Fun Fun Function',
					statistics: {
						viewCount: '7261372',
						subscriberCount: '180691',
						videoCount: '189'
					}
				},
				{
					title: 'Google Chrome Developers',
					statistics: {
						viewCount: '21089248',
						subscriberCount: '260317',
						videoCount: '796'
					}
				}
			];

			const received = sort('title', channelsList);
			expect(received).toEqual(expected);
		});

		it('Sorts by views', () => {
			const expected = [
				{
					title: 'Fun Fun Function',
					statistics: {
						viewCount: '7261372',
						subscriberCount: '180691',
						videoCount: '189'
					}
				},
				{
					title: 'DevTips',
					statistics: {
						viewCount: '13948443',
						subscriberCount: '306828',
						videoCount: '329'
					}
				},
				{
					title: 'Google Chrome Developers',
					statistics: {
						viewCount: '21089248',
						subscriberCount: '260317',
						videoCount: '796'
					}
				}
			];

			const received = sort('views', channelsList);
			expect(received).toEqual(expected);
		});

		it('Sorts by subscribers', () => {
			const expected = [
				{
					title: 'Fun Fun Function',
					statistics: {
						viewCount: '7261372',
						subscriberCount: '180691',
						videoCount: '189'
					}
				},		
				{
					title: 'Google Chrome Developers',
					statistics: {
						viewCount: '21089248',
						subscriberCount: '260317',
						videoCount: '796'
					}
				},
				{
					title: 'DevTips',
					statistics: {
						viewCount: '13948443',
						subscriberCount: '306828',
						videoCount: '329'
					}
				}
			];

			const received = sort('subscribers', channelsList);
			expect(received).toEqual(expected);
		});

		it('Sorts by videos', () => {
			const expected = [
				{
					title: 'Fun Fun Function',
					statistics: {
						viewCount: '7261372',
						subscriberCount: '180691',
						videoCount: '189'
					}
				},
				{
					title: 'DevTips',
					statistics: {
						viewCount: '13948443',
						subscriberCount: '306828',
						videoCount: '329'
					}
				},		
				{
					title: 'Google Chrome Developers',
					statistics: {
						viewCount: '21089248',
						subscriberCount: '260317',
						videoCount: '796'
					}
				}
			];

			const received = sort('videos', channelsList);
			expect(received).toEqual(expected);
		});
	});
});
