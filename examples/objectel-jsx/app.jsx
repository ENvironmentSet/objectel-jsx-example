import * as Ol from 'objectel';
import interval from 'callbag-interval';
import pipe from 'callbag-pipe';
import forEach from 'callbag-for-each';
import map from 'callbag-map';

import { Emit$, Listen$ } from './globalEventBus';

import Counter, { increase } from './components/Counter.jsx';
import InputPopup, { activePopup } from './components/InputPopup.jsx';

const counter = <Counter startValue={0} />;
const inputPopup = <InputPopup defaultValue={'0'}>{text => increase(Number(text))}</InputPopup>;

pipe(
  interval(2500),
  map(() => activePopup('increase!')),
  Emit$,
);
Emit$(inputPopup(Listen$));
forEach(console.log)(counter(Listen$));