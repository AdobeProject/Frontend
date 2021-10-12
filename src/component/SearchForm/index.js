import { Button } from "@material-ui/core";
import { useState } from "react";
import "./style.scss";

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
      <Button variant="outlined" color="primary">
        Search
      </Button>
    </div>
  );
}

export default SearchForm;
