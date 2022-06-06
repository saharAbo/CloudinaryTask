import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeTagFromImage } from "../db/images";

const TaggedImage = ({ tagName, images, color }) => {
  const filteredImages = images.filter(
    (image) => image.selectedTags && image.selectedTags.indexOf(tagName) >= 0
  );
  console.log(filteredImages);

  const remove_tag = (image) => {
    removeTagFromImage(image, tagName);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid item style={{ background: color, paddingLeft: 10 }}>
        <Typography variant={"h6"}>{tagName}</Typography>
      </Grid>
      <List
        sx={{
          width: "100%",
          maxWidth: 270,
          bgcolor: "background.paper",
        }}
      >
        {filteredImages.map((image) => (
          <>
            <ListItem
              key={image.id}
              alignItems="center"
              justifyContent="space-between"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon onClick={() => remove_tag(image.id)} />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  alt={image.author}
                  src={image.download_url}
                  variant="square"
                />
              </ListItemAvatar>
              <ListItemText>By: {image.author}</ListItemText>
            </ListItem>
          </>
        ))}
      </List>
    </Grid>
  );
};

export default TaggedImage;
