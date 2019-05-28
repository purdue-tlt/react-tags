import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import ClassNames from 'classnames';
import {
  tagSource,
  tagTarget,
  dragSource,
  dropCollect,
} from './DragAndDropHelper';
import { canDrag } from './utils';
import ItemTypes from './ItemTypes';
import RemoveComponent from './RemoveComponent';

class Tag extends Component {
  render() {
    const { props } = this;
    const label = props.tag[props.labelField];
    const {
      connectDragSource,
      isDragging,
      connectDropTarget,
      readOnly,
      tag,
      classNames,
    } = props;
    const { className = '' } = tag;
    const tagComponent = ( <span
      className={ClassNames('tag-wrapper', classNames.tag, className)}
      style={{opacity: isDragging ? 0 : 1, 'cursor': canDrag(props) ? 'move' : 'auto'}}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      onTouchStart={props.onClick}
      tabIndex={0}
      aria-label={`Tag ${label}`}>
      {label}
      <RemoveComponent
        tag={props.tag}
        className={classNames.remove}
        removeComponent={props.removeComponent}
        onClick={props.onDelete}
        readOnly={readOnly}
      />
    </span>
    );
    return connectDragSource(connectDropTarget(tagComponent));
  }
}

Tag.propTypes = {
  labelField: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  tag: PropTypes.shape({
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
  }),
  moveTag: PropTypes.func,
  removeComponent: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  classNames: PropTypes.object,
  readOnly: PropTypes.bool,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
};

Tag.defaultProps = {
  labelField: 'text',
  readOnly: false,
};

export default flow(
  DragSource(ItemTypes.TAG, tagSource, dragSource),
  DropTarget(ItemTypes.TAG, tagTarget, dropCollect)
)(Tag);
