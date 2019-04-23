/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css } from 'lit-element';
import "@material/mwc-button/mwc-button";

// This element is connected to the Redux store.
import { store } from '../../../store';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../../shared/styles/shared-styles.js';
import { ButtonSharedStyles } from '../../../shared/styles/button.js';
import { MWCSharedStyle } from '../../../shared/styles/mwc.js';
import { MWCSharedStyleCustom } from '../../../shared/styles/mwc-custom.js';

// These are the actions needed by this element.
import { addToCart } from '../../product/actions';

// This element is *not* connected to the Redux store.
class ProductBrief extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      category: { type: String },
      stock: { type: Number },
      price: { type: Number },
      photo: { type: String }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      MWCSharedStyle,
      MWCSharedStyleCustom,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  render() {
    return html`
    <div class="mdc-card">
      <div class="mdc-card__primary-action" tabindex="0">
        <div class="mdc-card__media mdc-card__media--16-9" style="background-image: url('${this.photo}')"></div>
        <div class="card__primary">
          <h2 class="card__title mdc-typography mdc-typography--headline6">
            ${this.name}
          </h2>
          <h3 class="card__subtitle mdc-typography mdc-typography--subtitle2">
            ${this.category}
          </h3>
        </div>
        <div class="card__secondary">
          <div class="mdc-typography mdc-typography--body2">
            Price : ${this.price} Rs.
            Stock : ${this.stock}
          </div>
        </div>
      </div>
      <div class="mdc-card__actions">
        <div class="mdc-card__action-buttons">
          <mwc-button class="pink" label="detail"></mwc-button>
        </div>
        <div class="mdc-card__action-icons">
          <mwc-button class="pink" icon="add_shopping_cart" .disabled="${this.stock === 0}" @click="${this._addButtonClicked}"
            data-index="${this.id}"></mwc-button>
          <mwc-button class="pink" icon="more_vert"></mwc-button>
        </div>
      </div>
    </div>
    `;
  }

  _addButtonClicked(e) {
    store.dispatch(addToCart(e.currentTarget.dataset['index']));
  }
}

window.customElements.define('product-brief', ProductBrief);
