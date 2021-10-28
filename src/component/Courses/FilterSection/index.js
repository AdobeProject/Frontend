import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { getCourses, getCoursesBySubCatId } from "../../../store/mainSlice";




function FilterSection() {
  let { catTitle, subCatId } = useParams();
  const [category, setCategory] = useState({})
  const [checked, setChecked] = useState([]);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const dispatch = useDispatch();


  useEffect(() => {
    if (categories) {
      for (let index = 0; index < categories.length; index++) {
        const element = categories[index];
        if (element.name === catTitle) {
          setCategory(element)
          break;
        }
      }
    }
  }, [catTitle,categories, subCatId])

  useEffect(() => {
    setChecked([])
    subCatId && setChecked([+subCatId])
  }, [subCatId])

  useEffect(() => {
    checked.length ? dispatch(getCoursesBySubCatId(checked.join())) : dispatch(getCourses(catTitle, subCatId))
  }, [checked, catTitle,subCatId, dispatch])



  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className="filter-section">
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", }}
      >
        {category.subCategories && category.subCategories.map((item) => {
          const labelId = `checkbox-list-secondary-label-${item.name}`;
          return (
            <ListItem
              onClick={handleToggle(item.id)}
              key={item.name}
              secondaryAction={
                <Checkbox
                  edge="end"
                  checked={checked.indexOf(item.id) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={`${item.name}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default FilterSection;
