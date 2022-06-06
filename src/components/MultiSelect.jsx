import React, { useEffect, useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { getTags } from "../db/tags";
import {
  Button,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import useLocalStorage from "@rehooks/local-storage";
import { addTagToImage } from "../db/images";
import SaveIcon from "@mui/icons-material/Save";
function MultiSelect({ image, tags }) {
  const [selected, setSelected] = useState(tags);
  const [options] = useLocalStorage("Tags");

  const handleChange = (value) => {
    if (selected.indexOf(value) >= 0)
      setSelected((curr) => curr.filter((x) => x != value));
    else setSelected((curr) => [...curr, value]);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const save_clicked = () => {
    addTagToImage(image, selected);
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options?.map((option) => (
          <MenuItem
            key={option}
            value={option}
            onClick={() => handleChange(option)}
          >
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option) > -1} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
        <MenuItem>
          <Button
            fullWidth
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={save_clicked}
          >
            Save
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
}

export default MultiSelect;
