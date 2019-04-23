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
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../../../store';

// These are the elements needed by this element.
import './cart-item.js';

// These are the reducers needed by this element.
import { cartItemsSelector, cartTotalSelector } from '../../product/reducer';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from '../../../shared/styles/button';
import { MWCSharedStyle } from '../../../shared/styles/mwc';
import { MWCSharedStyleCustom } from '../../../shared/styles/mwc-custom';

class CartItems extends connect(store)(LitElement) {
  static get properties() {
    return {
      _items: { type: Array },
      _total: { type: Number }
    };
  }

  static get styles() {
    return [
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
    if (this._items.length == 0) {
      return html`<p>Please add some products to cart.</p>`;
    } else {
      return html`
      ${this._items.map((item) =>        
        html`
        <cart-item .id="${item.id}" .name="${item.title}" category="${item.category}" quantity="${item.quantity}" price="${item.price}"></cart-item>
      `
    )}   
    <ul class="mdc-list demo-list mdc-list--two-line mdc-list--avatar-list">   
      <li class="mdc-list-divider" role="separator"></li>  
      <li class="mdc-list-item" tabindex="0">      
       <span class="mdc-list-item__text">
          <span class="mdc-list-item__primary-text">Total</span>
          <span class="mdc-list-item__secondary-text">Items : ${this._items.length}</span>
        </span>          
        <span class="mdc-list-item__meta" aria-hidden="true">$ ${this._total}</span>
      </li>
    </ul>
      `;
    }
  }
  
  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._items = cartItemsSelector(state);
    this._total = cartTotalSelector(state);
  }
}

window.customElements.define('cart-items', CartItems);
