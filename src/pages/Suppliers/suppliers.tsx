import React from "react";
import Table from "../../utils/table";
import { Button, Stack, Typography } from "@mui/material";

const Suppliers: React.FC = () => {
  return (
    <div>
      <Stack direction="row" alignItems="center" spacing={116}>
        <Typography variant="h4" sx={{ color: "#233759" }}>
          SUPPLIERS
        </Typography>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </Stack>
      <Table />
    </div>
  );
};

export default Suppliers;
