import { APP } from '../settings.js';

const { HEADING } = APP.WEB_COMPONENTS;

export default class Heading extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h1 class='header'><span class='header__js-logo'></span>Channels</h1>`;
    }
}

customElements.define(HEADING, Heading);
