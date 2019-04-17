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

// This element is connected to the Redux store.
import { store } from '../../store.js';

// These are the actions needed by this element.
import { removeFromCart } from '../../actions/products.js';

// This element is connected to the Redux store.
import { removeFromCartIcon } from '../my-icons.js';

// These are the shared styles needed by this element.
import { MWCSharedStyle } from '../shared-styles-mwc.js';
import { MWCSharedStyleCustom } from '../shared-styles-mwc-custom.js';

// This element is *not* connected to the Redux store.
class CartItem extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      category: { type: String },
      quantity: { type: Number },
      price: { type: Number },
      photo: { type: String }
    };
  }

  static get styles() {
    return [
      MWCSharedStyle,
      MWCSharedStyleCustom
    ];
  }

  render() {
    return html`
      <ul class="mdc-list demo-list mdc-list--two-line mdc-list--avatar-list">
        <li class="mdc-list-item" tabindex="0">
          <mwc-button @click="${this._removeButtonClicked}" data-index="${this.id}">${removeFromCartIcon}</mwc-button>
          <span class="mdc-list-item__text">
            <span class="mdc-list-item__primary-text">${this.name}</span>
            <span class="mdc-list-item__secondary-text">${this.category}</span>
          </span>
          <span class="mdc-list-item__meta" aria-hidden="true">${this.quantity} * $${this.price}</span>
        </li>
      </ul>
    `;
  }

  _removeButtonClicked(e) {
    store.dispatch(removeFromCart(e.currentTarget.dataset['index']));
  }
}

window.customElements.define('cart-item', CartItem);
