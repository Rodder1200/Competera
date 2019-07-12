import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { default as UUID } from 'uuid';
import { toast } from 'react-toastify';

import { addNewNote, removeNote } from '../actions/notesActions';

class CreateNote extends Component {
  state = {
    id: UUID.v4(),
    title: '',
    text: '',
    type: 'create'
  };

  componentDidMount() {
    const { match, editedNote } = this.props;
    const { id, title, text } = editedNote;
    if (match.params && match.params.id !== 'new') {
      this.setState({
        id,
        title,
        text,
        type: 'edit'
      });
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  createNote = () => {
    const { id, title, text, type } = this.state;
    if (type === 'edit') {
      this.props.removeNote({ id });
      this.props.addNewNote({ id, title, text });
      toast('Note was edited');
    } else {
      this.props.addNewNote({ id, title, text });
      toast('Note was created');
    }
    this.props.history.push('/');
  };

  render() {
    const { title, text, type } = this.state;
    return (
      <Fragment>
        <Link to={'/'}>
          <button className="btn btn-info">Back</button>
        </Link>
        <div className="jumbotron">
          <div className="container">
            <h2 className="page-header text-center">
              {type === 'create' ? 'Create new note' : 'Edit note'}
            </h2>
            <div className="form-group">
              <label htmlFor="title" className="form-check-label">
                Title
              </label>
              <input
                name="title"
                className="form-control"
                type="text"
                onChange={this.handleChange}
                value={title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="specs" className="form-check-label">
                Text
              </label>
              <textarea
                name="text"
                className="form-control"
                maxLength="500"
                rows="10"
                onChange={this.handleChange}
                value={text}
              />
            </div>
            <div className="text-center">
              <button
                className="btn btn-lg btn-success"
                onClick={this.createNote}
              >
                {type === 'create' ? 'Add' : 'Edit'}
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
    editedNote: state.editedNote
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      addNewNote,
      removeNote
    }
  )(CreateNote)
);
