import React from 'react';
import { connect } from 'react-redux';
import { toggleNote } from './actions/notes';

const styles = {
  yellow: {
    backgroundColor: 'blue',
  }
}

const Note = ({
  id,
  name,
  yellow,
  dispatch
}) => (
  <li
    onClick={ () => dispatch(toggleNote(id)) }
    style={ yellow ? styles.yellow : {} }
  >
    {name}
  </li>
)

export default connect()(Note)
