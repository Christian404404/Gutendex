import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
} from "@mui/material";

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?search=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h5" component="div">
          Gutendex - Free e-books
        </Typography>
        <Box
          component="form"
          onSubmit={handleSearch}
          sx={{ display: "flex", gap: 1 }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search for books"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" variant="contained" color="secondary">
            Search
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/favorites" color="inherit">
            Favorites
          </Button>
          {categories.map((catgrs) => (
            <Button
              key={catgrs}
              component={Link}
              to={`/category/${encodeURIComponent(catgrs.toLowerCase())}`}
              color="inherit"
            >
              {catgrs}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
