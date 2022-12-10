import React, { useState } from 'react'
import "./index.scss"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ErrorVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal-cont'
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <h4>Whoops!!! There's an error </h4>
        <h5>Please try again</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}