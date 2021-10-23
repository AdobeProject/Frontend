import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./style.scss";
import { Link } from "react-router-dom";
import { getSearchItem } from '../../store/searchSlice'
import { useDispatch, useSelector } from "react-redux";

function SearchForm() {
  const word = useSelector((state) => state.search.word);
  let { catTitle, subCaTitle } = useParams();

  console.log('catTitle', catTitle);

  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch()


  useEffect(() => {
    setSearchTerm(word),
      [word]
  })

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOnSearch = () => {
    dispatch(getSearchItem(searchTerm))
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Link to="/search" onClick={handleOnSearch}>
        <Button variant="outlined">
          Search
        </Button>
      </Link>
    </div>
  );
}

export default SearchForm;
