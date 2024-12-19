import React, { useState } from 'react';
import CIcon from '@coreui/icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
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
import './Modules.css';

const Modules = () => {
  const [text, setText] = useState('');
  //const [selectedDays, setSelectedDays] = useState([]);

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
                      <strong>Modules</strong>
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
                 <CRow>
                   <CCol xs={12} sm={6} md={6} lg={6} xl={6} className="mb-3">
                      <CFormLabel htmlFor="date">Course Thumbnail</CFormLabel>
                      <div className="input-file">
                        <div className="input-image">
                          <CFormInput
                            type="image"
                            id="startDate"
                            src="src/assets/images/gallery.jpg"
                          />
                        </div>
                        <div className="upload-image-file">
                          <span>
                            Upload your course Thumbnail here. <span>Important Guidelines:</span> 1200x800 pixels or 12:8 Ratio supported format: jpg, jpeg, or png.
                          </span>
                          <br />
                          {/* Label acts as a trigger for the hidden input */}
                          <CFormLabel htmlFor="imageFile" className="custom-upload-label">
                            Upload Image
                            <FontAwesomeIcon icon={faUpload} style={{ marginLeft: '8px' }} />
                          </CFormLabel>
                          {/* Hidden input */}
                          <CFormInput
                            type="file"
                            id="imageFile"
                            className="hidden-input"
                            accept=".jpg,.jpeg,.png"
                          />
                        </div>
                      </div>
                    </CCol>

                    <CCol xs={12} sm={6} md={6} lg={6} xl={6} className="mb-3">
                      <CFormLabel htmlFor="date">Course Trailer(optional)

                      </CFormLabel>
                      <div className="input-file">
                        <div className="input-image">
                          <CFormInput
                            type="image"
                            id="startDate"
                            src="src/assets/images/video.png"
                          />
                        </div>
                        <div className="upload-image-file">
                          <span>
                            Students who watch a well-made promo video are 5X more likely to enroll in your course.We've seen that statistic go up to 10X fo exceptionally awesome videos.
                          </span>
                          <br />
                          {/* Label acts as a trigger for the hidden input */}
                          <CFormLabel htmlFor="videoFile" className="custom-upload-label">
                            Upload Video
                            <FontAwesomeIcon icon={faUpload} style={{ marginLeft: '8px' }} />
                          </CFormLabel>
                          {/* Hidden input */}
                          <CFormInput
                            type="file"
                            id="videoFile"
                            className="hidden-input"
                            accept=".mp4"
                          />
                        </div>
                      </div>
                    </CCol>
                </CRow>
                <CCol xs={12}>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Modules Title</CFormLabel>
                    <CFormInput
                      type="text"
                      id="courseTitle"
                      placeholder="Your Course Title"
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">
                      Modules Description
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
                <CRow className="mt-4">
                  <CCol xs={12}>
                    <CButton color="secondary" className="">
                      Cancel
                    </CButton>
                    <CButton color="primary" className="m-4">
                      Save
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
              <CCol xs={12} className="">
                    <CButton color="primary" className="add-modules">
                      Add Modules
                    </CButton>
                  </CCol>
                  <div className='row m-4'>
                    <CCol xs={6}>
                        <CButton className='btn btn-outline-secondary'>
                          Previous
                        </CButton>
                    </CCol>
                    <CCol xs={6} className="">
                      <CButton color="primary" className="text-end">
                        save & Next
                      </CButton>
                    </CCol> 
            </div>
            </CCardBody>
      </div>
  );
};

export default Modules;
