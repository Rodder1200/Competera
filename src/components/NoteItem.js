import React from 'react';
import { withRouter } from 'react-router-dom';

const Note = ({ title, text, note_id, history }) => {
  const showMore = () => {
    history.push(`/note/${note_id}/${title}`);
  };
  return (
    <div className="product card col-md-5 m-3 p-2">
      <div className="card-body">
        <h4 className="card-title"> {title} </h4>
        <p className="card-text"> {text} </p>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <button className="btn btn-info" onClick={showMore}>
            More details
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Note);
