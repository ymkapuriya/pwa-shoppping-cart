/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { PageViewElement } from '../page-view-element';
import { connect } from 'pwa-helpers/connect-mixin';
import "@material/mwc-button/mwc-button";


// This element is connected to the Redux store.
import { store } from '../../store';

// These are the actions needed by this element.
import { checkout } from '../../modules/product/actions';

// We are lazy loading its reducer.
import shop, { cartQuantitySelector } from '../../modules/product/reducer';
store.addReducers({
  shop
});

// These are the elements needed by this element.
import '../../modules/product/containers/cart-items';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../shared/styles/shared-styles';
import { ButtonSharedStyles } from '../../shared/styles/button';
import { MWCSharedStyle } from '../../shared/styles/mwc';
import { MWCSharedStyleCustom } from '../../shared/styles/mwc-custom';
import { addToCartIcon } from '../../shared/styles/icons';

class MainViewCart extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      // This is the data from the store.
      _quantity: { type: Number },
      _error: { type: String }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      MWCSharedStyle,
      MWCSharedStyleCustom,
      css`
        .cart,
        .cart svg {
          fill: var(--app-primary-color);
          width: 64px;
          height: 64px;
        }

        .circle.small {
          margin-top: -72px;
          width: 28px;
          height: 28px;
          font-size: 16px;
          font-weight: bold;
          line-height: 30px;
        }
      `
    ];
  }

  render() {
    return html`      
      <section>
        <div class="cart">
          ${addToCartIcon}
          <div class="circle small">
            ${this._quantity}
          </div>
        </div>
        <mwc-button label="Checkout" outlined ?disabled="${this._quantity == 0}" @click="${this._checkoutButtonClicked}"></mwc-button>
      </section>
      <section>
        <cart-items></cart-items>
        <div>${this._error}</div>
      </section>
    `;
  }

  _checkoutButtonClicked() {
    store.dispatch(checkout());
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._quantity = cartQuantitySelector(state);
    this._error = state.shop.error;
  }
}

window.customElements.define('main-cart', MainViewCart);
