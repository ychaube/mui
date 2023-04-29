import React, { useState } from "react";
import { Tooltip, Fab, Modal, Box, Typography, styled } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 20 },
        }}
        onClick={() => setIsOpen(true)}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography
            variant="h6"
            component="h2"
            color={"gray"}
            textAlign={"center"}
          >
            Create Post
          </Typography>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
