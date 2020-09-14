import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-grid/all-imports.js';

export class App extends LitElement {

  static get properties() {
    return {
      items: { attribute: false, type: Array }
    }
  }

  get grid() {
    return this.shadowRoot.querySelector('vaadin-grid');
  }

  render() {
    return html`
      <vaadin-grid>
        <vaadin-grid-column>
          <template class="header">Index</template>
          <template>[[index]]</template>
        </vaadin-grid-column>
        <vaadin-grid-column path="title" header="Titolo"></vaadin-grid-column>
        <vaadin-grid-column path="deadline" header="Scadenza"></vaadin-grid-column>
        <vaadin-grid-column path="isDone" header="Completato"></vaadin-grid-column>
        <vaadin-grid-column>
          <template class="header">Dettagli</template>
          <template>
            <x-details item$="{{item}}" index="[[index]]"></x-details>
          </template>
        </vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  firstUpdated() {
    this.grid.items = this.items;
    this.grid.addEventListener('itemChanged', this._itemChanged.bind(this));
  }

  _itemChanged(e) {
    console.log(e.detail.item);
    this.grid.items[e.detail.index] = e.detail.item;
    this.grid.items = [...this.grid.items];
  }
}