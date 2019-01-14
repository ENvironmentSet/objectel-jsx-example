import flatten from 'callbag-flatten';
import map from 'callbag-map';

export default transformer => source$ => flatten(map(transformer)(source$));