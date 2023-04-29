import React, { useState } from "react";
import { Feed, Navbar, Rightbar, Sidebar, Add } from "./shared/components";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          direction={"row"}
          spacing={{ xs: 0, sm: 2 }}
          justifyContent={"space-between"}
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
