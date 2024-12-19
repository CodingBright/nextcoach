import React, { useState } from 'react';
import { CButton, CCard, CRow } from '@coreui/react';
import BasicInformation from './BasicInformation/BasicInformation';
import Modules from './Modules/Modules';
import './Form.css';
import Assignment from './Assignments/Assignments';
import Assignments from './Assignments/Assignments';

const Form = () => {
  const [activeTab, setActiveTab] = useState('basic'); // State to track active tab

  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicInformation />;
      case 'modules':
        return <Modules />;
        case 'assignments':
        return <Assignments />;
      default:
        return null;
    }
  };

  return (
    <CRow>
      <CCard className="mb-4">
        <div className="row">
          <div className="col-12 header-page-btns">
            <div className="events-form-pages">
              <div className="event-form-page-btn">
                {/* Replaced <a> with button */}
                <button
                  type="button"
                  onClick={() => setActiveTab('basic')}
                  className={`btn-tab ${activeTab === 'basic' ? 'active' : ''}`}
                >
                  Basic Information
                </button>
              </div>
              <div className="event-form-page-btn">
                <button
                  type="button"
                  onClick={() => setActiveTab('modules')}
                  className={`btn-tab ${activeTab === 'modules' ? 'active' : ''}`}
                >
                  Modules
                </button>
              </div>
              <div className="event-form-page-btn">
                <button
                  type="button"
                  onClick={() => setActiveTab('assignments')}
                  className={`btn-tab ${activeTab === 'assignments' ? 'active' : ''}`}
                >
                  Assignments
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Conditionally render content based on activeTab */}
        {renderContent()}
      </CCard>
    </CRow>
  );
};

export default Form;
