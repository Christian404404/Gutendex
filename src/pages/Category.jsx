import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchBooksByCategory } from "../utilities/gutenDexAPI";
import BookList from "../components/BookList";

import {
  Container,
  Typography,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";

export default function Category() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const { topic } = useParams();

  useEffect(() => {
    if (!topic) return;

    const fetchBooksByCategory = async () => {
      try {
        setLoading(true);
        const data = await searchBooksByCategory(topic, page);
        setBooks(data.results);
        setNextPage(data.next);
        setPreviousPage(data.previous);
      } catch (err) {
        setError("Something went wrong while fetching category books.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooksByCategory();
  }, [topic, page]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: 600 }}
      >
        Category: {topic.charAt(0).toUpperCase() + topic.slice(1)}
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && <BookList books={books} />}

      {!loading && !error && books.length > 0 && (
        <Box display="flex" justifyContent="center" sx={{ mt: 4, gap: 2 }}>
          <Button variant="contained"></Button>
        </Box>
      )}
    </Container>
  );
}
