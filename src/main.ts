import './style.css';
import { Counter } from './counter.ts';
import { ElementHandler } from './element.ts';
import { Container } from 'inversify';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
`;

// DI without IoC
const elementHandler = new ElementHandler('#counter');
const counter = new Counter(elementHandler);

counter.setUpCounter();

// DI with IoC using inversify
const container = new Container();

container.bind(Counter).toSelf();
container.bind(ElementHandler).toSelf();

const elementHandlerIoC = container.get(ElementHandler);
const counterIoC = container.get(Counter);

counterIoC.setUpCounter();