export class ElementHandler {
  private _element: HTMLElement | null = null;

  constructor(id: string) {
    this.getElementById(id);
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
