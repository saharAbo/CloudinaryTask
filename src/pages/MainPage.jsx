import React from "react";
import { Grid } from "@mui/material";
import { SideBar } from "../components/LeftSideBar";
import UntaggedImages from "../components/UntagedContainer";
import TaggedImagesContainer from "../components/TaggedimagesContainer";

const Main = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="stretch"
    >
      <Grid item xs={4} lg={2}>
        <div
          style={{
            position: "sticky",
            top: 0,
          }}
        >
          <SideBar />
        </div>
      </Grid>
      <Grid container item xs={8} lg={9}>
        <Grid item xs={12} lg={12}>
          <UntaggedImages />
        </Grid>
        <Grid item xs={12} lg={12}>
          <TaggedImagesContainer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
