import {HdElement} from '../hd/core/hd-element.js';
import { } from './component.js';

const TOTAL = 1000;
const START_TIME = Date.now();

let data = {};
for (let i = 0; i < TOTAL; i++) {
  data['entry' + i] = 'TEXT ' + i;
}

class MainApp extends HdElement {
  constructor() {
    super();

    this.state = {
      data: data,
      on: {
        refresh: () => {
          let startTime = Date.now();
          for (let key in data) {
            this.setStateProperty('data.' + key, 'TEXT ' + startTime);
          }
          // @ts-ignore
          window.requestIdleCallback(() => {
            console.log(Date.now() - startTime);
          });
        },
      },
    };

  }

  connectedCallback() {
    // @ts-ignore
    window.requestIdleCallback(() => {
      console.log(Date.now() - START_TIME);
    });
  }

}
MainApp.template = /*html*/ `
<style>
  :host {
    display: block;
  }
  .viewport {
    padding: 10px;
  }
</style>
<button bind="onclick: on.refresh">UPDATE ALL</button>
<div class="viewport">
  ${Object.keys(data).map((key) => /*html*/ `<my-component bind="text: data.${key}"></my-component>`).join('')}
</div>
`;
MainApp.is = 'main-app';
