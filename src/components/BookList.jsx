import BookCard from "./BookCard.jsx";
import { Grid, Typography } from "@mui/material";

export default function BookList({ books }) {
  if (!books?.length)
    return (
      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        No Books found.
      </Typography>
    );

  return (
    <Grid container spacing={5} justifyContent="center" sx={{ p: 2 }}>
      {books.map((bks) => (
        <Grid
          key={bks.id}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            minWidth: 200,
            maxWidth: 200,
          }}
        >
          <BookCard book={bks} />
        </Grid>
      ))}
    </Grid>
  );
}
