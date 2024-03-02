import "reflect-metadata";

import { injectable } from "inversify";

@injectable()
export class ElementHandler {
  private _element: HTMLElement | null = null;
  private _id: string;

  constructor(id: string) {
    this._id = id;
    this.getElementById(this._id);
  }

  setInnerHtml(value: string) {
    if (this._element) this._element.innerHTML = value;
  }

  attachEventListener(event: keyof HTMLElementEventMap, cb: any) {
    if (this._element) this._element.addEventListener(event, cb);
  }

  private getElementById(id: string) {
    this._element = document.querySelector<HTMLButtonElement>(id)!;
  }
}
