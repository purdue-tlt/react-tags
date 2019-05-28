'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var KEYS = exports.KEYS = {
  ENTER: 13,
  TAB: 9,
  BACKSPACE: 8,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40,
  DELETE: 46,
  ESCAPE: 27
};

var DEFAULT_PLACEHOLDER = exports.DEFAULT_PLACEHOLDER = 'Add new tag';

var DEFAULT_LABEL_FIELD = exports.DEFAULT_LABEL_FIELD = 'text';

var DEFAULT_CLASSNAMES = exports.DEFAULT_CLASSNAMES = {
  tags: 'ReactTags__tags',
  tagInput: 'ReactTags__tagInput',
  tagInputField: 'ReactTags__tagInputField',
  selected: 'ReactTags__selected',
  tag: 'ReactTags__tag',
  remove: 'ReactTags__remove',
  suggestions: 'ReactTags__suggestions',
  activeSuggestion: 'ReactTags__activeSuggestion'
};

var INPUT_FIELD_POSITIONS = exports.INPUT_FIELD_POSITIONS = {
  INLINE: 'inline',
  TOP: 'top',
  BOTTOM: 'bottom'
};