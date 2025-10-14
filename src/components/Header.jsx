import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const categories = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Fantasy",
  "Morality",
  "Society",
  "Power",
  "Justice",
  "Adventure",
  "Tragedy",
  "War",
  "Philosophy",
];

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const smallScreen = useMediaQuery("(max-width:1004px)");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?search=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar sx={{ flexWrap: "wrap", gap: 2 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            color="inherit"
            sx={{ textDecoration: "none", fontWeight: "bold", flexGrow: 1 }}
          >
            Gutendex - Free e-books
          </Typography>
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{ display: "flex", gap: 1 }}
          >
            <TextField
              size="small"
              placeholder="Search for books"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="outlined"
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,
                width: { xs: 150, sm: 250, md: 300 },
              }}
            />
            <Button type="submit" variant="contained" color="secondary">
              Search
            </Button>
          </Box>

          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button
            component={Link}
            to="/favorites"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Favorites
          </Button>
        </Toolbar>

        <Toolbar
          variant="dense"
          sx={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            bgcolor: "background.default",
          }}
        >
          <Stack direction="row" spacing={1}>
            {categories.map((catgrs) => (
              <Button
                key={catgrs}
                component={Link}
                to={`/category/${encodeURIComponent(catgrs.toLowerCase())}`}
                size="small"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                {catgrs}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
