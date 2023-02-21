import React, { useState } from 'react'
import "./index.scss"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function VerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal-cont'
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <h4>We are glad to have you!!! 🥳</h4>
        <p>
          As one of our amiable, interested client, you are entitled to 50% discount when we launch.
        </p>
           <h4>Thank you!</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}