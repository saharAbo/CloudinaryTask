import useLocalStorage from "@rehooks/local-storage";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { ListItemIcon, TextField } from "@mui/material";
import { get_colors, removeTag, updateTag } from "../db/tags";

const TagsContainer = () => {
  let [tags] = useLocalStorage("Tags");
  let colors = JSON.parse(get_colors());
  if (typeof tags == "string") tags = JSON.parse(tags);

  const convertArrayToObject = (arr, value) => {
    const obj = {};
    arr?.forEach((t) => {
      obj[t] = value || t;
    });
    return obj;
  };

  const [edit, setEdit] = useState(convertArrayToObject(tags, false));
  const [newTags, setNewTags] = useState(convertArrayToObject(tags || []));
  console.log(newTags);
  const updateNewTags = (oldTag, newTag) => {
    setNewTags((cur) => {
      return { ...cur, [oldTag]: newTag };
    });
  };
  const change_tag_name = (t) => {
    if (newTags[t]) updateTag(t, newTags[t]);
    setEdit((cur) => ({ ...cur, [t]: false }));
  };
  return (
    <>
      <List>
        {tags?.map((tag, idx) => (
          <ListItem
            style={{ background: "#" + colors[idx] }}
            secondaryAction={
              !edit[tag] ? (
                <React.Fragment>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() =>
                      setEdit((curr) => ({ ...curr, [tag]: true }))
                    }
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeTag(tag)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </React.Fragment>
              ) : (
                <IconButton
                  edge="end"
                  aria-label="save"
                  onClick={() => change_tag_name(tag)}
                >
                  <SaveIcon />
                </IconButton>
              )
            }
          >
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            {!edit[tag] && <ListItemText primary={tag} />}
            {edit[tag] && (
              <TextField
                label="Tag"
                variant="standard"
                value={newTags[tag]}
                defaultValue={tag}
                onChange={(e) => updateNewTags(tag, e.target.value)}
              />
            )}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TagsContainer;
