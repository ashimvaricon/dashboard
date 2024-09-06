import { Box, Modal, ModalProps } from "@mui/material";
import React from "react";

const Modals: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    p: 4,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default Modals;
