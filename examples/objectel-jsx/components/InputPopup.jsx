import * as Ol from 'objectel';
import noop from '../noop';

const ACTIVE_POPUP = Symbol('active-popup');
export const activePopup = text => Ol.createEvent(ACTIVE_POPUP, text);
activePopup[Symbol.toPrimitive] = () => ACTIVE_POPUP;

const InputPopUp = Ol.component(
  noop,
  (text, { defaultValue, children: [transformer] }) => transformer(prompt(text, defaultValue)),
  {
    [activePopup]: text => text,
  }
);

export default InputPopUp;