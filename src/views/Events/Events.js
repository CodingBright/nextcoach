import React, { useState } from 'react'; // Import React and useState hook
import ScheduledClasses from "./ScheduledClasses/ScheduledClasses";
import WidgetsBrand from "../widgets/WidgetsBrand";
import BasicInformation from "./Form/BasicInformation/BasicInformation";
import CIcon from '@coreui/icons-react';
import EventCategory from "./EventsCategory/EventCategory";
import Form from './Form/Form';
import { Modal, Button } from 'react-bootstrap';
import './Events.css';
import { cilCalendar } from '@coreui/icons';

function Events() {
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [eventType, setEventType] = useState(""); // State for selected event type
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const handleShowModal = () => setShowModal(true); // Function to show modal
  const handleCloseModal = () => setShowModal(false); // Function to hide modal

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!eventType) {
      alert("Please select an event type!"); // Validate selection
      return;
    }

    const formData = { eventType };
    console.log(formData);

    try {
      // Simulate form submission success
      // Uncomment the following when integrating with an actual API:
      /*
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      */
        alert('Event created successfully!');
        handleCloseModal(); // Close modal
        setEventType(""); // Reset the form
        setFormSubmitted(true); // Mark form as submitted
      /*
      } else {
        alert('Error creating event.');
      }
      */
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="events-body">
      {!formSubmitted && (
        <div className="scheduled-classes-body" id="scheduledClass">
          <div className="container-fluid">
            <div className="heading-events-body">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
                  <h5>Scheduled Classes</h5>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 add-event-btn">
                  <CIcon icon={cilCalendar} customClassName="nav-icon" />
                  <button
                    className="btn btn-primary add-events"
                    onClick={handleShowModal} // Add onClick to open modal
                  >
                    + Add Events
                  </button>
                </div>
              </div>
            </div>

            {/* Modal start */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
              <Modal.Header>
                <Modal.Title>What type of event do you want to create?</Modal.Title>
              </Modal.Header>
              <form onSubmit={handleSubmit}>
                <Modal.Body>
                  <div className="mb-3 event-input">
                    <input
                      type="radio"
                      id="liveClasses"
                      name="eventType"
                      value="Live Classes"
                      className="form-check-input event-radio"
                      onChange={(e) => setEventType(e.target.value)} // Update state
                    />
                    <label htmlFor="liveClasses" className="form-check-label event-title-name">
                      <img src="src/assets/images/live.png" alt="Live Classes" className="events-img" />
                      <h5>Live Classes</h5>
                    </label>
                  </div>
                  <div className="mb-3 event-input">
                    <input
                      type="radio"
                      id="webinar"
                      name="eventType"
                      value="Webinar"
                      className="form-check-input event-radio"
                      onChange={(e) => setEventType(e.target.value)} // Update state
                    />
                    <label htmlFor="webinar" className="form-check-label event-title-name">
                      <img src="src/assets/images/webinar.png" alt="Webinar" className="events-img" />
                      <h5>Webinar</h5>
                    </label>
                  </div>
                  <div className="mb-3 event-input">
                    <input
                      type="radio"
                      id="playlist"
                      name="eventType"
                      value="Create a Playlist"
                      className="form-check-input event-radio"
                      onChange={(e) => setEventType(e.target.value)} // Update state
                    />
                    <label htmlFor="playlist" className="form-check-label event-title-name">
                      <img src="src/assets/images/playlist.png" alt="Create a Playlist" className="events-img" />
                      <h5>Create a Playlist</h5>
                    </label>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                  <Button type="submit" variant="primary">
                    Save Event
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>
            {/* Modal end */}

            <EventCategory />
          </div>
        </div>
        
      )}
      <Form />
      {formSubmitted && <Form />}
    </div>
  );
}

export default Events;
