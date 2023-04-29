import React from "react";
import { Box } from "@mui/material";

import { Post } from "../";

const Feed = () => {
  const items = new Array(5).fill({
    image:"https://picsum.photos/600/400",
    title: "Lorem ipsum dolor sit amet.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, molestiae? Et ipsa eaque nihil voluptatem perferendis quasi, atque dignissimos fuga placeat illum, cumque sed nemo!",
    date: new Date().toLocaleDateString(),
  });

  return (
    <Box flex={4} p={2}>
      {items.map((item) => (
        <Post {...item}  />
      ))}
    </Box>
  );
};

export default Feed;
