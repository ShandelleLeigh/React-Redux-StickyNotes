import React from 'react';
import { connect } from 'react-redux';
import { incId } from './actions/nextId';
import { addNote } from './actions/notes';

class NoteForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { dispatch, id } = this.props;
    const note = { name, id, complete: false}
    dispatch(addNote(note))
    dispatch(incId())
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h3>Add a note</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={name}
            onChange={this.handleChange}
            required
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {id: state.nextIdD}
}

export default connect()(NoteForm);
