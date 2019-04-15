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
import { PageViewElement } from '../page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// mwc components
import { Button } from '@material/mwc-button';
import { Ripple } from '@material/mwc-ripple';

// This element is connected to the Redux store.
import { store } from '../../store.js';

// These are the actions needed by this element.
import { checkout } from '../../actions/products.js';

// We are lazy loading its reducer.
import shop, { cartQuantitySelector } from '../../reducers/products.js';
store.addReducers({
  shop
});

// These are the elements needed by this element.
import '../products/prod-list.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared-styles.js';
import { ButtonSharedStyles } from '../shared-styles-button.js';
import { MWCSharedStyle } from '../shared-styles-mwc.js';
import { MWCSharedStyleCustom } from '../shared-styles-mwc-custom.js';

class MainViewProducts extends connect(store)(PageViewElement) {
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
        button {
          border: 2px solid var(--app-dark-text-color);
          border-radius: 3px;
          padding: 8px 16px;
        }

        button:hover {
          border-color: var(--app-primary-color);
          color: var(--app-primary-color);
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h2>Products</h2>
      </section>
      <section>
        <product-list></product-list>
      </section>
    `;
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._quantity = cartQuantitySelector(state);
    this._error = state.shop.error;
  }
}

window.customElements.define('main-products', MainViewProducts);
