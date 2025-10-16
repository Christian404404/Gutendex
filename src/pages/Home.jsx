import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchBooks } from "../utilities/gutenDexAPI";
import BookList from "../components/BookList";
import PaginationControl from "../components/PaginationControl.jsx";

import {
  Container,
  Typography,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";

export default function Home() {
  const [params] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const search = params.get("search") || "";

  useEffect(() => {
    if (!search) return;

    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await searchBooks(search, page);
        setBooks(data.results);
        setNextPage(data.next);
        setPreviousPage(data.previous);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [search, page]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: 600 }}
      >
        {search ? `Search results for "${search}"` : "Search for a book"}
      </Typography>
      {loading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      )}
      {error && <Alert severity="error" sx={{ mt: 3 }}></Alert>}
      {!loading && !error && <BookList books={books} />}

      {!loading && !error && books.length > 0 && (
        <PaginationControl
          page={page}
          setPage={setPage}
          nextPage={nextPage}
          previousPage={previousPage}
        ></PaginationControl>
      )}
    </Container>
  );
}
