import { Box, Button, Typography } from "@mui/material";

export default function PaginationControl({
  page,
  setPage,
  nextPage,
  previousPage,
}) {
  if (!nextPage && !previousPage) return null;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 4, gap: 2 }}
    >
      <Button
        variant="contained"
        disabled={!previousPage}
        onClick={() => previousPage && setPage((prev) => prev - 1)}
      >
        Previous
      </Button>

      <Typography variant="body1" alignSelf="center">
        Page {page}
      </Typography>

      <Button
        variant="contained"
        disabled={!nextPage}
        onClick={() => nextPage && setPage((prev) => prev + 1)}
      >
        Next
      </Button>
    </Box>
  );
}
