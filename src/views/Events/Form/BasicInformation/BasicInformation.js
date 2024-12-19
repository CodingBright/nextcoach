import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormSelect,
} from '@coreui/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './BasicInformation.css';

const BasicInformation = () => {
  const [text, setText] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);

  const handleTextChange = (value) => {
    setText(value);
  };

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div>
            <CCardHeader>
                <CRow>
              
                      <CCol xs={6} className='header-title'>
                      <strong>Basic Information</strong>
                      </CCol>
                      <CCol xs={6}>
                        <CButton color="primary" className="save-preview">
                        Save & preview
                        </CButton>
                        <CButton color="primary" className="save-preview">
                          Save
                        </CButton>
                      </CCol>
                    </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm>
                <CCol xs={12}>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                    <CFormInput
                      type="text"
                      id="courseTitle"
                      placeholder="Your Course Title"
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">
                      Course Description
                    </CFormLabel>
                    <ReactQuill
                      value={text}
                      onChange={handleTextChange}
                      theme="snow"
                      id="courseDescription"
                      placeholder="Your Course Description"
                    />
                  </div>
                </CCol>
                <CRow>
                  <CCol xs={12} sm={6} md={6} lg={3} className="mb-3">
                    <CFormLabel htmlFor="courseLanguage">Course Language</CFormLabel>
                    <CFormSelect
                      aria-label="Default select example"
                      id="courseLanguage"
                    >
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} sm={6} md={6} lg={3} className="mb-3">
                    <CFormLabel htmlFor="courseLevel">Course Level</CFormLabel>
                    <CFormSelect
                      aria-label="Default select example"
                      id="courseLevel"
                    >
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} sm={6} md={6} lg={3} className="mb-3">
                    <CFormLabel htmlFor="date">Start Date</CFormLabel>
                    <CFormInput
                      type="date"
                      id="startDate"
                      placeholder="Select a start date"
                    />
                  </CCol>
                  <CCol xs={12} sm={6} md={6} lg={3} className="mb-3">
                    <CFormLabel htmlFor="scheduledTime">Scheduled Time</CFormLabel>
                    <CFormInput
                      type="time"
                      id="scheduledTime"
                      placeholder="Select a time"
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={12} className="mb-3">
                    <CFormLabel htmlFor="scheduleday">Scheduled Days</CFormLabel>
                    <div className="d-flex flex-wrap gap-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                        (day) => (
                          <CButton
                            key={day}
                            color={
                              selectedDays.includes(day) ? 'primary' : 'basic day-btn'
                            }
                            onClick={() => toggleDay(day)}
                          >
                            {day}
                          </CButton>
                        )
                      )}
                    </div>
                  </CCol>
                </CRow>
                <CRow className="mt-4">
                  <CCol xs={6}>
                    <CButton color="secondary" className="">
                      Cancel
                    </CButton>
                  </CCol>
                  <CCol xs={6} className="text-end">
                    <CButton color="primary" className="">
                      Save & Next
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
            </div>
  );
};

export default BasicInformation;
