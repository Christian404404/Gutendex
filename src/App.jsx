import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";

function App() {
  const userPrefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode: userPrefersDarkMode ? "dark" : "light",
      },
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
