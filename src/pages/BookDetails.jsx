import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchBooksById } from "../utilities/gutenDexAPI";

import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  CircularProgress,
  Alert,
  Link,
} from "@mui/material";

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const data = await searchBooksById(id);
        setBook(data);
      } catch (err) {
        setError("Failed to load book details");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const addFavorite = () => {
    if (!book) return;

    const alreadyFavorite = favorites.some((fav) => fav.id === book.id);
    if (alreadyFavorite) return;

    const updated = [...favorites, book];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };
  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  if (!book)
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" align="center">
          Book was not found in our database.
        </Typography>
      </Container>
    );

  return (
    <Container sx={{ py: 4 }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          p: 3,
          boxShadow: 3,
        }}
      >
        {book.formats["image/jpeg"] && (
          <CardMedia
            component="img"
            sx={{
              width: { sx: "100%", sm: 300 },
              borderRadius: 2,
              objectFit: "cover",
            }}
            image={book.formats["image/jpeg"]}
            alt={book.title}
          />
        )}
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Author: {book.authors?.length ? book.authors[0].name : "Unknown"}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Id in database: {book.id}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Downloads: {book.download_count}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Languages: {book.languages.join(", ")}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Subjects: {book.subjects?.join(", ") || "Not found"}
          </Typography>

          {book.formats["text/html"] && (
            <Link
              href={book.formats["text/html"]}
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ display: "inline-block", mb: 2 }}
            >
              Read Book
            </Link>
          )}
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={addFavorite}
              sx={{ mt: 1 }}
            >
              Add to favorites
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
