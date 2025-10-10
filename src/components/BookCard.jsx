import { Link } from "react-router-dom";
import fallBackImg from "../assets/404Image/404-error-page-free-download-free-vector.jpg";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

export default function BookCard({ book }) {
  const coverImage = book.formats["image/jpeg"] || fallBackImg;
  return (
    <Card
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      <CardMedia
        component="img"
        image={coverImage}
        alt={book.title}
        sx={{ height: 300, objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom noWrap>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {book.authors?.length ? book.authors[0].name : "Uknown Author"}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", pb: 1 }}>
        <Button
          size="small"
          variant="contained"
          component={Link}
          to={`/book/${book.id}`}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
