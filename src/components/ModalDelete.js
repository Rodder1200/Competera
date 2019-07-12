import React from 'react';

const ModalDelete = ({ onClose, handleDeleteNote }) => {
  return (
    <div className="modal modal-show">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete note</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <p>Are you sure?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDeleteNote}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
