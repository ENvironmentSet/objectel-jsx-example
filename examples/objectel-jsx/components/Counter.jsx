import * as Ol from 'objectel';

const INCREASE = Symbol('increase');
export const increase = count => Ol.createEvent(INCREASE, count);
increase[Symbol.toPrimitive] = () => INCREASE;

const Counter = Ol.component(
  props => props.startValue,
  count => count,
  {
    [increase]: (amount, _, prevCount) => prevCount + amount
  }
);

export default Counter;