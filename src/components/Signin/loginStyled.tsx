import { Button, Checkbox, styled, TextField } from "@mui/material";

export const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.status.white, // Label color
  },
  "& .MuiInputBase-input": {
    color: theme.status.white, // Text color
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.status.white,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.status.white, // Apply the custom color to the border
      },
    },

    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "& .MuiInputBase-input": {
      color: theme.status.white,
    },
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  py: 1.5,

  fontSize: "0.9rem",
  fontWeight: "600",
  boxSizing: "border-box",
  color: "#233759",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#f27921", // Background color on hover
  },
}));

export const WhiteCheckbox = styled(Checkbox)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    color: "#98a5b9", // Default checkbox color (unchecked state)
  },
  "&.Mui-checked": {
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.main, // Color of the checkmark (checked state)
    },
  },
}));
