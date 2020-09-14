import { LitElement, html } from 'lit-element';
import { render } from 'lit-html';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-date-time-picker/vaadin-date-time-picker.js'

export class Details extends LitElement {
  constructor() {
    super();
    this._boundDialogRenderer = this.dialogRenderer.bind(this);
    this.changedValues = [];
  }
  
  static get properties() {
    return {
      item: {
        attribute: 'item',
        type: Object
      },

      changedValues: {
        type: Array
      },

      index: {
        type: Number
      },

      _opened: {
        type: Boolean
      }
    }
  }

  render() {
    return html`
      <vaadin-button @click="${this._toggleDialog}">Modifica</vaadin-button>
      <vaadin-dialog
        ?opened="${this._opened}"
        .renderer="${this._boundDialogRenderer}"
        no-close-on-esc no-close-on-outside-click
      ></vaadin-dialog>
    `;
  }

  dialogRenderer(root) {
    render(
      html`
        <vaadin-text-field value="${this.item.title}" @input="${this._input.bind(this)}" name="title"></vaadin-text-field>
        <vaadin-date-time-picker value="${this.item.deadline.substr(0, this.item.deadline.length - 1)}" @change="${this._input.bind(this)}" name="deadline"></vaadin-date-time-picker>
        <vaadin-button theme="primary" @click="${this._save.bind(this)}">Salva</vaadin-button>
        <vaadin-button @click="${this._cancel.bind(this)}">Cancella</vaadin-button>
      `, root
    );
  }

  _toggleDialog() {
    this._opened = !this._opened;
  }

  _save() {
    if (Object.keys(this.changedValues).length != 0) {
      this.item = Object.fromEntries(
        Object.entries(this.item).map(([key, value]) => [key, this.changedValues[key] || value])
      );
      this.dispatchEvent(new CustomEvent('itemChanged', {
        bubbles: true,
        composed: true,
        detail: { 
          item: this.item,
          index: this.index
        }
      }));
    }
    this._toggleDialog();
  }

  _cancel(e) {
    this._toggleDialog();
    this.changedValues = [];
    e.target.parentElement.querySelectorAll('vaadin-text-field').forEach((el) => {
      el.value = this.item[el.name];
    });
  }

  _input(e) {
    console.log(e);
    this.changedValues[e.target.name] = e.target.value;
  }
}