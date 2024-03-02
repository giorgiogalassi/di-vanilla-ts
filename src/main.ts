import './style.css';
import { Counter } from './counter.ts';
import { ElementHandler } from './element.ts';
import { Container } from 'inversify';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h2>Counter without IoC</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    
    <h2>Counter with IoC</h2>
    <div class="card">
      <button id="counterIoC" type="button"></button>
    </div>
`;

// DI without IoC
const elementHandler = new ElementHandler('#counter');
const counter = new Counter(elementHandler);

counter.setUpCounter();

// DI with IoC using inversify
const container = new Container();

container.bind<Counter>(Counter).toSelf();
container.bind<ElementHandler>(ElementHandler).toConstantValue(new ElementHandler('#counterIoC'));

const counterIoC = container.get(Counter);

counterIoC.setUpCounter();