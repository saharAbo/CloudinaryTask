import {
  ImageList,
  Chip,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Grid,
} from "@mui/material";
import useLocalStorage from "@rehooks/local-storage";
import MultiSelect from "./MultiSelect";

const UntaggedImages = () => {
  const [images] = useLocalStorage("Images");
  return (
    <>
      <Typography variant="h5" component="h2">
        Unassigned
      </Typography>
      <ImageList cols={4}>
        {images
          ?.filter((x) => !x.selectedTags || x.selectedTags.length == 0)
          .map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.download_url}/500/400`}
                srcSet={`${item.download_url}`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                subtitle={
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={10}>
                      <span>by: {item.author}</span>
                    </Grid>
                    <Grid item xs={2}>
                      <MultiSelect
                        key={"tags" + item.id}
                        image={item.id}
                        tags={item.selectedTags || []}
                      />
                    </Grid>
                  </Grid>
                }
                position="below"
              />
            </ImageListItem>
          ))}
      </ImageList>
    </>
  );
};

export default UntaggedImages;
