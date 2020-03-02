import { css } from 'lit-element';

export const styles = css`
  :host {
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);  
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
    display: flex;
    flex-direction: column;
    width: var(--card-width);
    height: var(--card-height);
    background-color: var(--card-bg-color, white)

  }

  .container {
    padding: var(--card-padding, 6px);
    margin: var(--card-margin, 0px);
  }

  ::slotted(.title) {
    font-weight: 600;
    margin-bottom: 0;
  }

  ::slotted(.footer) {
    display: flex;
    justify-content: flex-end;
  }

`;  