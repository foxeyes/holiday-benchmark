import {HdElement} from '../hd/core/hd-element.js';
export class MyComponent extends HdElement {
  constructor() {
    super();
    this.state = {};
    this.defineAccessor('text', (val) => {
      this.setStateProperty('text', val);
    });
  }
}
MyComponent.template = /*html*/ `
<div bind="textContent: text"></div>
`;
MyComponent.logicAttributes = [
  'text',
];
MyComponent.is = 'my-component';
