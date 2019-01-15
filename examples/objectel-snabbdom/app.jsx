import * as Ol from 'objectel';
import { VDOM } from '@packages/snabbel';
import forEach from 'callbag-for-each';
import map from 'callbag-map';
import pipe from 'callbag-pipe';
import interval from 'callbag-interval';

import { Emit$, Listen$ } from './globalEventBus';

import Counter, { increase } from './components/Counter.jsx';
import InputPopup, { activePopup } from './components/InputPopup.jsx';

window.addEventListener('DOMContentLoaded', () => {
  const vdom = (
    <VDOM container={document.body}>
      <Counter startValue={0} />
      <InputPopup defaultText='Enter something!' defaultValue={'0'}>
        {text => increase(Number(text))}
      </InputPopup>
    </VDOM>
  );

  pipe(
    interval(2500),
    map(() => activePopup('Enter number to add to counter')),
    Emit$,
  );
  forEach(console.log)(vdom(Listen$));
});
