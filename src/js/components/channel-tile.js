import { APP } from '../settings.js';
import { toLocaleString } from '../utils/helper.js';

const { CHANNEL_TILE } = APP.WEB_COMPONENTS;

export default class ChannelTile extends HTMLElement {
    set channel(channel) {
        this.render(channel);
    }

    render(channel) {
        this.innerHTML = `
        <article class="channel-card">
            <div class="image-wrapper">
                <a href="${channel.customUrl}" target="_blank">
                    <picture alt="logo">
                        <source srcset="${channel.thumbnails.medium.url}"
                            media="(min-width: 945px)">
                        <source srcset="${channel.thumbnails.high.url}" 
                            media="(min-width: 1280px)">
                        <img src="${channel.thumbnails.default.url}" >
                    </picture>
                </a>
            </div>
            <p class="title">${channel.title}</p>
            <div class="statistics">
                <div class="statistics__details">
                    <span class="statistics__details--uppercase statistics__details--color">subscribers:</span>
                    <span>${toLocaleString(channel.statistics.subscriberCount)}</span>
                </div>

                <div class="statistics__details">
                    <span class="statistics__details--uppercase statistics__details--color">videos:</span>
                    <span>${toLocaleString(channel.statistics.videoCount)}</span>
                </div>

                <div class="statistics__details">
                    <span class="statistics__details--uppercase statistics__details--color">views:</span>
                    <span>${toLocaleString(channel.statistics.viewCount)}</span>
                </div>
            </div>
        </article>
          `;
    }
}

customElements.define(CHANNEL_TILE, ChannelTile);
