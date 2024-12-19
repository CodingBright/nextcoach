import React, { useState } from "react";
 import './EventCategory.css';
 import ScheduledClasses from "./ScheduledClasses/ScheduledClasses";
function EventCategory() {
        const [searchTerm, setSearchTerm] = useState("");

        const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        console.log("Search term:", e.target.value); // To verify the input is working
        };

  return (
    <div className="events-category">
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
                    <div className="events-search">
                        <input
                            type="text"
                            placeholder="Search"
                            id="search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
           
        </div>
        <ScheduledClasses className="mb-4" withCharts/>

    </div>
  );
}

export default EventCategory;
