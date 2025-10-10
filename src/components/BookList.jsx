import BookCard from "./BookCard.jsx";
import { Grid, Typography, Box } from "@mui/material";

export default function BookList({ books }) {
  if (!books?.length)
    return (
      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        No Books found.
      </Typography>
    );

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {books.map((bks) => (
          <Grid item key={bks.id} xs={12} sm={6} md={4} lg={3}>
            <BookCard key={bks.id} book={bks} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
