import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NoteItem from './NoteItem';
import { removeNote } from '../actions/notesActions';

class MainPage extends Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  goToCreatePage = () => {
    this.props.history.push('/create/new');
  };

  render() {
    const { notes } = this.props;
    return (
      <div className="container">
        <button
          className="btn btn-warning alert-warning"
          onClick={this.goToCreatePage}
        >
          Create New Note
        </button>
        <div className="row justify-content-between">
          {notes instanceof Array &&
            notes.map((item, index) => (
              <NoteItem
                key={`${item.id}${index}`}
                note_id={item.id}
                title={item.title}
                text={item.text}
                handleChange={this.handleChange}
              />
            ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { removeNote }
  )(MainPage)
);
