import { ElementHandler } from './element';

export class Counter {
  private _elementHandler: ElementHandler;
  private _counter = 0;

  constructor(element: ElementHandler) {
    this._elementHandler = element;
  }

  setUpCounter() {
    this._elementHandler.attachEventListener('click', () =>
      this.setCounter(this._counter + 1)
    );

    this.setCounter(0);
  }

  private setCounter(count: number) {
    this._counter = count;
    this._elementHandler.setInnerHtml(`count is ${this._counter}`);
  }
}
