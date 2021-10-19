import { Button } from "@material-ui/core";
import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Link to ="/searchedItems">
        <Button variant="outlined" color="primary">
          Search
        </Button>
      </Link>
    </div>
  );
}

export default SearchForm;
