import { APP } from '../settings.js';

const { SORTER } = APP.WEB_COMPONENTS;
const { SORTER_CHANGED, SORTER_BUTTON_CLICKED } = APP.EVENTS;

class AppSorter extends HTMLElement {
    constructor() {
        super();
        this.render();

        this.sorterOptions = this.querySelectorAll("input[name='sort']");
        this.sorterButton = this.querySelector('.button');

        this.sorterButton.addEventListener('click', () => {
            this.dispatchButton();
        });

        this.sorterOptions.forEach((elem) => {
            elem.addEventListener('click', ({ target }) => {
                this.dispatchSort(target);
            });
        });
    }

    render() {
        this.innerHTML = `
		<div class="sort">
			<h3 class="sort__header">Sort channels by:</h3>
				<ul class="sort__options">
					${['title', 'subscribers', 'videos', 'views']
                        .map((name) => {
                            return `
					<li>
						<input
							class="choice choice--radio"
							name="sort"
							type="radio"
							id="${name}"
							/>
						<label class="choice__label" for="${name}">
							${name}
						</label>
					</li>
					`;
                        })
                        .join('')}
				</ul>
			<button class="button">Clear</button>
		</div>`;
    }

    dispatchSort({ id }) {
        this.event = new CustomEvent(SORTER_CHANGED, { detail: id });
        this.dispatchEvent(this.event);
    }

    dispatchButton() {
        this.event = new CustomEvent(SORTER_BUTTON_CLICKED);
        this.dispatchEvent(this.event);
    }
}

customElements.define(SORTER, AppSorter);
