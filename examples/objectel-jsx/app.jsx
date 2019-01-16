import * as Ol from 'objectel';
import interval from 'callbag-interval';
import pipe from 'callbag-pipe';
import forEach from 'callbag-for-each';
import map from 'callbag-map';
import merge from 'callbag-merge';

import { Emit$, Listen$ } from './globalEventBus';

import Counter, { increase } from './components/Counter.jsx';
import InputPopup, { activePopup } from './components/InputPopup.jsx';

const App = ({ children }) => event$ => {
  if (!children.length) children = [children];

  return merge(...children.map(element => element(event$)));
};

const app = (
  <App>
    <Counter startValue={0}/>
    <InputPopup defaultValue={'0'}>{text => increase(Number(text))}</InputPopup>
  </App>
);

pipe(
  interval(2500),
  map(() => activePopup('increase!')),
  Emit$,
);

Emit$(app(Listen$));
forEach(console.log)(Listen$);