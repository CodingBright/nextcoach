import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './EventType.css';

function EventType({ showModal, handleCloseModal }) {
  const [selectedEventType, setSelectedEventType] = useState('');

  const eventTypes = [
    { id: 'liveClasses', value: 'Live Classes', img: 'src/assets/images/live.png' },
    { id: 'webinar', value: 'Webinar', img: 'src/assets/images/webinar.png' },
    { id: 'playlist', value: 'Create a Playlist', img: 'src/assets/images/playlist.png' },
  ];

  const handleEventChange = (e) => {
    setSelectedEventType(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedEventType) {
      alert('Please select an event type.');
      return;
    }

    // Log the selected value
    console.log('Submitting event type:', selectedEventType);

    // Perform API call
    fetch('https://your-backend-api.com/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventType: selectedEventType }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data); // Log the API response
        handleCloseModal(); // Close the modal
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>What type of event do you want to create?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          {eventTypes.map((event) => (
            <div className="mb-3 event-input" key={event.id}>
              <input
                type="radio"
                id={event.id}
                name="eventType"
                value={event.value}
                className="form-check-input event-radio"
                onChange={handleEventChange}
              />
              <label htmlFor={event.id} className="form-check-label event-title-name">
                <img src={event.img} alt={event.value} className="events-img" />
                <h5>{event.value}</h5>
              </label>
            </div>
          ))}
          <div className="mt-4">
            <Button variant="primary" className="submit-btn" type="submit">
              Continue
            </Button>
            <Button variant="secondary" className="submit-btn" onClick={handleCloseModal}>
          Cancel
        </Button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default EventType;
