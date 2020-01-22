import React from 'react'
import PropTypes from 'prop-types';

function TechItem(props) {
  return (
    <li>
      {props.tech}
      <button onClick={props.onRemove} type="button">remove</button>
    </li>
  );
}


TechItem.PropTypes = {
  tech: PropTypes.string,
  onRemove: PropTypes.func.isRequired
}

export default TechItem;