import { Grid, Paper } from "@mui/material";
import useLocalStorage from "@rehooks/local-storage";
import React from "react";
import {get_colors} from "../db/tags";
import TaggedImage from "./TaggedImage";

const TaggedImagesContainer = () => {
  const [images] = useLocalStorage("Images");
  const [tags] = useLocalStorage("Tags");
  const colors = JSON.parse(get_colors());
  return (
    <>
      <Grid container spacing={2}>
        {tags?.map((t, idx) => (
          <Grid item xs={4} md={3}>
            <Paper key={t} variant="outlined" square style={{ minHeight: 250 }}>
              <TaggedImage
                tagName={t}
                images={images}
                color={"#" + colors[idx]}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TaggedImagesContainer;
