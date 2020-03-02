
import { LitElement, html } from 'lit-element';
import { styles } from './lanthierial-card-styles';

export class LanthierialCard extends LitElement {

  static get styles() {
    return [
      styles
    ];
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <style>
    @import "lanthierial-card.css";
    </style>
    <div class="container">
      <slot></slot>
    </div>
    `;
  }

}

// Register the element with the browser
customElements.define('lanthierial-card', LanthierialCard);
