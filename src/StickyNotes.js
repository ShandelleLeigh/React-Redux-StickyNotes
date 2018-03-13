import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
// import currentFilter from './reducers/currentFilter'

const filtered = (notes, currentFilter) => {
  switch (currentFilter) {
    case 'Active':
      return notes.filter (t => !t.complete)
    case 'Completed':
      return notes.filter (t => t.complete)
    default:
      return notes;
  }
}

const StickyNotes = ({ notes, currentFilter }) => (
  <ul>
    { filtered(notes, currentFilter).map( t => {
        return (
          <Note
            key={t.id}
            {...t} 
          />
        )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    currentFilter: state.currentFilter,
  }
}

export default connect(mapStateToProps)(StickyNotes)
