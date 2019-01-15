import * as Ol from 'objectel';
import { patchVnode } from '@packages/snabbel';
import h from 'snabbdom/h';
import { createEventCreator } from '@packages/objectel-events';

const INCREASE = Symbol('increase');
export const increase = createEventCreator(INCREASE);

const Counter = Ol.component(
  props => props.startValue,
  count => patchVnode(h('p', {}, `count: ${count}`)),
  {
    [increase]: (amount, _, prevCount) => prevCount + amount
  }
);

export default Counter;