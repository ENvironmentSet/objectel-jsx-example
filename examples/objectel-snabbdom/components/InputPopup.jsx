import * as Ol from 'objectel';
import noop from '@packages/noop';
import { createEventCreator } from '@packages/objectel-events';

const ACTIVE_POPUP = Symbol('active-popup');
export const activePopup = createEventCreator(ACTIVE_POPUP);

const InputPopUp = Ol.component(
  noop,
  (text, { defaultText, defaultValue, children: transformer }) =>
    transformer(prompt(text || defaultText, defaultValue)),
  {
    [activePopup]: text => text,
  }
);

export default InputPopUp;