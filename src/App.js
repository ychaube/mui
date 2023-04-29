import React from "react";
import { Feed, Navbar, Rightbar, Sidebar } from "./shared/components";
import { Box, Stack } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
