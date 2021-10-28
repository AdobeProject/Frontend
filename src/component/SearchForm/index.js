import { Button } from "@material-ui/core";
import { useState } from "react";
import { useParams } from "react-router";

import "./style.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function SearchForm() {
  const word = useSelector((state) => state.search.word);

  const [searchTerm, setSearchTerm] = useState('');


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
      <Link to={`/search/${searchTerm}`}>
        <Button variant="outlined">
          Search
        </Button>
      </Link>
    </div>
  );
}

export default SearchForm;
