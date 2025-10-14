import { Link } from "react-router-dom";
import fallBackImg from "../assets/404Image/404-error-page-free-download-free-vector.jpg";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function BookCard({ book }) {
  const coverImage = book.formats["image/jpeg"] || fallBackImg;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 250,
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      <CardMedia
        component="img"
        image={coverImage}
        alt={book.title}
        sx={{
          height: 300,
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {book.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {book.authors?.length
            ? book.authors.map((a) => a?.name || "Unknown").join(", ")
            : "Unknown"}
        </Typography>
      </CardContent>

      <Stack direction="row" spacing={1} sx={{ p: 1 }}>
        <Button
          size="small"
          variant="contained"
          component={Link}
          to={`/book/${book.id}`}
          fullWidth
        >
          Details
        </Button>
      </Stack>
    </Card>
  );
}
