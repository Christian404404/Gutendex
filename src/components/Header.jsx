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
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
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
  const [drawerOpen, setDrawerOpen] = useState(false);
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

      {smallScreen ? (
        <>
          <Toolbar variant="dense" sx={{ justifyContent: "flex-end" }}>
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                bgcolor: "background.paper",
                width: "auto",
                minWidth: 200,
                p: 1,
              },
            }}
          >
            <List sx={{ width: 250 }}>
              {categories.map((cat) => (
                <ListItem
                  button
                  key={cat}
                  component={Link}
                  to={`/category/${encodeURIComponent(cat.toLowerCase())}`}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    "&:hover": {
                      bgcolor: "action.hover",
                      borderRadius: 1,
                    },
                    py: 1,
                    px: 2,
                  }}
                >
                  <ListItemText primary={cat} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        <Toolbar
          variant="dense"
          sx={{
            justifyContent: "center",

            overflowX: "auto",
            whiteSpace: "nowrap",
            bgcolor: "background.default",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
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
      )}
    </AppBar>
  );
}
