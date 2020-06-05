import { APP } from '../settings.js';

const { FILTER } = APP.WEB_COMPONENTS;
const { FILTER_CHANGED } = APP.EVENTS;

class Filter extends HTMLElement {
    constructor() {
        super();
        
	    this.addEventListener('keyup', ({ target }) => {
            this.dispatch(target);
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
          <div class="filter">
            <input
              class="filter__input"
              type="text"
              placeholder="filter channels..."
            />
          </div>
    `;
    }

    dispatch({ value }) {
        this.event = new CustomEvent(FILTER_CHANGED, {
            detail: value.toLowerCase(),
        });
        this.dispatchEvent(this.event);
    }
}

customElements.define(FILTER, Filter);
