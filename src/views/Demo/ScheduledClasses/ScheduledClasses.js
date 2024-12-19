import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFile, faEnvelope, faTrophy, faCalendar, faVideo } from '@fortawesome/free-solid-svg-icons';
// import SearchBar from './SearchBar';
import './ScheduledClasses.css';
import { DocsExample } from 'src/components';

const ScheduledClasses = () => {
    const classData = [
        {
            date: '2024-12-18',
            title: 'Live Coding Session',
            type: 'Live Class',
            details: [
                { icon: faClock, label: '3 Months' },
                { icon: faFile, label: '20 Modules' },
                { icon: faTrophy, label: '3 Assignments' },
                { icon: faEnvelope, label: 'All Levels' },
            ],
        },
        {
            date: '2024-12-18',
            title: 'Web Development Basics',
            type: 'Webinar',
            details: [
                { icon: faCalendar, label: 'Monday, November 20 9:00 am - 2:00 pm' },
                { icon: faVideo, label: 'Google Meet' },
            ],
        },
        {
            date: '2024-12-19',
            title: 'Web Development Basics 33',
            type: 'Webinar',
            details: [
                { icon: faCalendar, label: 'Monday, November 20 9:00 am - 2:00 pm' },
                { icon: faVideo, label: 'Google Meet' },
            ],
        },
        {
            date: '2024-12-19',
            title: 'Live Coding Session',
            type: 'Live Class',
            details: [
                { icon: faClock, label: '3 Months' },
                { icon: faFile, label: '20 Modules' },
                { icon: faTrophy, label: '3 Assignments' },
                { icon: faEnvelope, label: 'All Levels' },
            ],
        },
        {
            date: '2024-12-18',
            title: 'Web Development Basics',
            type: 'Webinar',
            details: [
                { icon: faCalendar, label: 'Monday, November 20 9:00 am - 2:00 pm' },
                { icon: faVideo, label: 'Google Meet' },
            ],
        },
        {
            date: '2024-12-18',
            title: 'Web Development Basics',
            type: 'Webinar',
            details: [
                { icon: faCalendar, label: 'Monday, November 20 9:00 am - 2:00 pm' },
                { icon: faVideo, label: 'Google Meet' },
            ],
        },
        {
            date: '2024-12-18',
            title: 'Live Coding Session',
            type: 'Live Class',
            details: [
                { icon: faClock, label: '3 Months' },
                { icon: faFile, label: '20 Modules' },
                { icon: faTrophy, label: '3 Assignments' },
                { icon: faEnvelope, label: 'All Levels' },
            ],
        },
        
        // Add more data as needed
    ];

    // Group classes by date
    const groupedData = classData.reduce((acc, curr) => {
        acc[curr.date] = acc[curr.date] || [];
        acc[curr.date].push(curr);
        return acc;
      }, {});
    
      // State for current pages for each date
      const [currentPages, setCurrentPages] = useState(
        Object.keys(groupedData).reduce((acc, date) => {
          acc[date] = 1;
          return acc;
        }, {})
      );
    
      const itemsPerPage = 4; // Items per page
    
      const handlePageChange = (date, pageNumber) => {
        setCurrentPages((prev) => ({
          ...prev,
          [date]: pageNumber,
        }));
      };
    return (
        <div className="scheduled-classes-body">
            <div className="container-fluid">
            <div className="heading-events-body">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
                           <h5>Scheduled Classes</h5>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
                            <button className="btn btn-primary add-events">
                                +Add Events
                            </button>
                        </div>
                    </div>
                </div>
                {/* Heading and Add Button */}
                <div className="classes-category">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
                            <ul className="class-category-body">
                                <li><a href="#">Scheduled Classes</a></li>
                                <li><a href="#">Class History</a></li>
                                <li><a href="#">Collaborated Class</a></li>
                            </ul>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12">
                            {/* <SearchBar /> */}
                        </div>
                    </div>
                </div>

                {/* Render grouped classes */}
                {Object.keys(groupedData).map((date) => {
                    const currentPage = currentPages[date];
                    const totalPages = Math.ceil(groupedData[date].length / itemsPerPage);

                    // Get paginated data for the current page
                    const paginatedData = groupedData[date].slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                    );

                    return (
                        <div key={date}>
                            <div className="scheduled-date">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCalendar} className="nav-icon" /> {date}</li>
                                </ul>
                            </div>
                            <div className="row">
                                {paginatedData.map((classItem, index) => (
                                    <div
                                        className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                                        key={`${date}-${index}`}
                                    >
                                        <div className="schedule-classes">
                                            <div className="event-title">
                                                <h5>{classItem.title}</h5>
                                            </div>
                                            <div className="event-type">
                                                <button className={`btn class-status ${ classItem.type === 'Live Class' ? 'btn-live' : 'btn-webinar'}`}>
                                                    {classItem.type}
                                                </button>
                                            </div>
                                            <div className="events-timeline">
                                                <div className="row">
                                                    {classItem.details.map((detail, detailIndex) => (
                                                        <div
                                                            className={classItem.type === 'Webinar' ? 'col-12 timeline' : 'col-6 timeline'}
                                                            key={`${date}-${index}-${detailIndex}`}
                                                        >
                                                            <ul id="timelineSection">
                                                                <li className="timeline-btn">
                                                                    <FontAwesomeIcon
                                                                        icon={detail.icon}
                                                                        className="timeline-icon"
                                                                    />
                                                                    <span className="timeline-name">
                                                                        {detail.label}
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn btn-primary btn-details">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Pagination Controls */}
                            <div className="pagination-controls">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(date, currentPage - 1)}
                      >
                        Previous
                      </button>
                    </li>

                    {Array.from({ length: totalPages }).map((_, index) => (
                      <li
                        key={index + 1}
                        className={`page-item ${
                          currentPage === index + 1 ? 'active' : ''
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(date, index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(date, currentPage + 1)}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
                        </div>
                    );
                })}
              
            </div>
        </div>
    );
};

export default ScheduledClasses;
