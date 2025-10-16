import { useTheme, Button, Typography, Paper, alpha } from "@mui/material";

export default function PaginationControl({
  page,
  setPage,
  nextPage,
  previousPage,
}) {
  if (!nextPage && !previousPage) return null;
  const theme = useTheme();
  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        px: 3,
        py: 1.5,
        borderRadius: 3,
        backgroundColor: alpha(theme.palette.background.paper, 0.65),
        backdropFilter: "blur(8px)",
        zIndex: 1400,
      }}
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
    </Paper>
  );
}
