import React from 'react';
import PropTypes from 'prop-types';

import './MessageDialog.css';

/**
 * MessageDialog component
 *
 * @param {Object} props
 * @param {string} props.messageTitle - Title of message to be shown in the dialog
 * @param {string} props.messageContent - Message to be shown in the dialog
 * @param {function} props.dialogCloseCallback - Close dialog callback
 * @returns component
 */
const MessageDialog = ({
  messageTitle,
  messageContent,
  dialogCloseCallback,
}) => {
  return (
    <div className="messageDialog">
      <div>
        <header className="header">
          <span className="closeBtn" onClick={dialogCloseCallback}>
            <span className="closeIcon">x</span>
          </span>
          <h4 className="title">{messageTitle}</h4>
        </header>
        <main className="content">{messageContent}</main>
        <footer className="footer">
          <button
            type="button"
            className="btn-confirm"
            onClick={dialogCloseCallback}
          >
            Confirm
          </button>
        </footer>
      </div>
    </div>
  );
};

MessageDialog.propTypes = {
  messageTitle: PropTypes.string.isRequired,
  messageContent: PropTypes.string.isRequired,
  dialogCloseCallback: PropTypes.func.isRequired,
};

export default MessageDialog;
