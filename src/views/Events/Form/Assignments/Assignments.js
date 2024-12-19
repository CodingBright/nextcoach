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
import './Assignments.css';

const Assignments = () => {
  const [text, setText] = useState('');
  // const [selectedDays, setSelectedDays] = useState([]);

  const handleTextChange = (value) => {
    setText(value);
  };
  return (
    <div>
            <CCardHeader>
                <CRow>              
                      <CCol xs={6} className='header-title'>
                      <strong>Assignments</strong>
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
                    <CFormLabel htmlFor="moduleOptions">Select Module</CFormLabel>
                    <div id="moduleOptions">
                      <div className="form-check">
                        <input
                          type="radio"
                          className='radio-input'
                          id="module1"
                          name="module"
                          value="Module 1: Introduction of DevOps"
                        />
                        <label className="form-check-label" htmlFor="module1">
                          Module 1: Introduction of DevOps
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className='radio-input'
                          id="module2"
                          name="module"
                          value="Module 2: Basics of AWS"
                        />
                        <label className="form-check-label" htmlFor="module2">
                          Module 2: Basics of AWS
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className='radio-input'
                          id="module3"
                          name="module"
                          value="Module 3: Learning Linux"
                        />
                        <label className="form-check-label" htmlFor="module3">
                          Module 3: Learning Linux
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className='radio-input'
                          id="module4"
                          name="module"
                          value="Module 4: Learning Java"
                        />
                        <label className="form-check-label" htmlFor="module4">
                          Module 4: Learning Java
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className='radio-input'
                          id="module5"
                          name="module"
                          value="Module 5: Learning jQuery"
                        />
                        <label className="form-check-label" htmlFor="module5">
                          Module 5: Learning jQuery
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Assignment Title</CFormLabel>
                    <CFormInput
                      type="text"
                      id="courseTitle"
                      placeholder="Your Course Title"
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">
                      Assignment Description
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
                    <CButton color="secondary m-4" className="">
                      Cancel
                    </CButton>
                                
                    <CButton color="primary m-4" className="">
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

export default Assignments;
