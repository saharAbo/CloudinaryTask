import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import Icon from "@mui/material/Icon";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addTag } from "../db/tags";
import TagsContainer from "./TageContainer";

export const SideBar = () => {
  const [tagName, setTagName] = useState("");
  const add_tag = () => {
    if (tagName) addTag(tagName);
    setTagName("");
  };
  const handleChange = (event) => {
    setTagName(event.target.value);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{ paddingLeft: 16 }}
      >
        <Grid item xs={10}>
          <TextField
            fullWidth
            id="tagName"
            value={tagName || ""}
            onChange={handleChange}
            label="New Tag"
            variant="standard"
          />
        </Grid>
        <Grid item xs style={{ paddingLeft: 10 }}>
          <AddCircleOutlineIcon onClick={add_tag} />
        </Grid>
      </Grid>
      <TagsContainer />
    </>
  );
};
