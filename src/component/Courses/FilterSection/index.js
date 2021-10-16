import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

import "./style.scss";
import { useParams } from "react-router";
import { useSelector } from "react-redux";


function FilterSection() {
  let { catTitle } = useParams();
  const categories = useSelector((state) => state.categoriesReducer.categories);


  const [checked, setChecked] = React.useState([]);

  console.log(checked);

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
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" , }}
      >
        {categories[0].subCategories.map((item) => {
          const labelId = `checkbox-list-secondary-label-${item.title}`;
          return (
            <ListItem
              onClick={handleToggle(item)}
              key={item.title}
              secondaryAction={
                <Checkbox
                  edge="end"
                  checked={checked.indexOf(item) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={`${item.title}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default FilterSection;
