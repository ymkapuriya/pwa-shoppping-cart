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
import { connect } from 'pwa-helpers/connect-mixin';

// This element is connected to the Redux store.
import { store } from '../../../store';

// These are the elements needed by this element.
import '../components/prod-brief';
import { Button } from '@material/mwc-button';

// These are the actions needed by this element.
import { getAllProducts } from '../actions';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../../shared/styles/shared-styles';
import { ButtonSharedStyles } from '../../../shared/styles/button';
import { MWCSharedStyle } from '../../../shared/styles/mwc';
import { MWCSharedStyleCustom } from '../../../shared/styles/mwc-custom';


class ProductList extends connect(store)(LitElement) {
  static get properties() {
    return {
      _products: { type: Object }
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
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        ${Object.keys(this._products).map((key) => {
          const item = this._products[key];
          return html`        
            <div class="mdc-layout-grid__cell--span-3">
              <product-brief id="${item.id}" category="${item.category}" name="${item.title}" stock="${item.stock}" price="${item.price}" photo="${item.photo}"></product-brief>
            </div>
        `;
      })}
      </div>
    </div>
    `;
  }

  firstUpdated() {
    store.dispatch(getAllProducts());
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._products = state.shop.products;
  }
}

window.customElements.define('product-list', ProductList);