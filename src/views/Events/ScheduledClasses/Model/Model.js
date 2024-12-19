import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components

function EventModal({ showModal, handleCloseModal }) {
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>What type of event do you want to create?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <input 
              type="radio" 
              id="eventTitle" 
              name="eventType" 
              value="title" 
              className="form-check-input" 
            />
            <label htmlFor="eventTitle" className="form-check-label">
              Event Title
            </label>
          </div>
          <div className="mb-3">
            <input 
              type="radio" 
              id="eventDate" 
              name="eventType" 
              value="date" 
              className="form-check-input" 
            />
            <label htmlFor="eventDate" className="form-check-label">
              Event Date
            </label>
          </div>
          <div className="mb-3">
            <input 
              type="radio" 
              id="eventType" 
              name="eventType" 
              value="type" 
              className="form-check-input" 
            />
            <label htmlFor="eventType" className="form-check-label">
              Event Type
            </label>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancle
        </Button>
        <Button variant="primary">
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EventModal;
