import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { Container, Typography, Box, Button } from "@mui/material";

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
        {/* <Box display="flex" justifyContent="center" sx={{ mt: 4, gap: 2 }}>
          <Button
            variant="contained"
            disabled={!previousPage}
            onClick={() => previousPage && setPage((prev) => prev - 1)}
          >
            Previous
          </Button>

          <Typography alignSelf="center">Page {page}</Typography>

          <Button
            variant="contained"
            disabled={!nextPage}
            onClick={() => nextPage && setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </Box> */}
      </Box>
    </Container>
  );
}
