import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { Container, Typography, Box } from "@mui/material";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <Container>
      <Typography variant="h4" fontWeight={600} gutterBottom textAlign="center">
        Favorite Books
      </Typography>
      <Box mt={3}>
        <BookList books={favorites} />
      </Box>
    </Container>
  );
}
