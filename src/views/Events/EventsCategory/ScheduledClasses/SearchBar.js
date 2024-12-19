import React, { useState } from "react";
import './SearchBar.css';
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search term:", e.target.value); // To verify the input is working
  };

  return (
    <div className="events-search">
      <input
        type="text"
        placeholder="Search"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* <p>Search Term: {searchTerm}</p> Optional: Display the current search term */}
    </div>
  );
}

export default SearchBar;
