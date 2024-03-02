import './style.css';
import { Counter } from './counter.ts';
import { ElementHandler } from './element.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
`;

const elementHandler = new ElementHandler('#counter');
const counter = new Counter(elementHandler);

counter.setUpCounter();
