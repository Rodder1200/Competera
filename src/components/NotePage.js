import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import { editNote, removeNote } from '../actions/notesActions';
import ModalDelete from './ModalDelete';

class NotePage extends Component {
  state = { isModalDelete: false };

  componentDidMount() {
    this.props.editNote(
      this.props.notes.filter(item => item.id === this.props.match.params.id)
    );
  }

  toggleModalDelete = () => {
    this.setState(prevState => ({
      isModalDelete: !prevState.isModalDelete
    }));
  };

  goToCreatePage = () => {
    this.props.history.push(`/create/${this.props.match.params.id}`);
  };

  goHome = () => {
    this.props.history.push('/');
  };

  handleDeleteNote = () => {
    this.props.removeNote({ id: this.props.match.params.id });
    this.toggleModalDelete();
    this.props.history.push('/');
    toast('Note was deleted');
  };

  render() {
    const { title, text } = this.props.editedNote;
    const { isModalDelete } = this.state;
    return (
      <div>
        {isModalDelete && (
          <ModalDelete
            onClose={this.toggleModalDelete}
            handleDeleteNote={this.handleDeleteNote}
          />
        )}
        <button className="btn btn-info" onClick={this.goHome}>
          Back
        </button>
        <div className="card p-3 mh-100">
          <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text"> {text} </p>
          </div>
          <div
            className="btn-group justify-content-end"
            role="group"
            aria-label="edit_delete"
          >
            <button
              className="btn btn-sm btn-outline-warning"
              onClick={this.goToCreatePage}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={this.toggleModalDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editedNote: state.editedNote,
    notes: state.notes
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { removeNote, editNote }
  )(NotePage)
);
