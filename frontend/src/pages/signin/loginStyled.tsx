import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EmailIcon from "@mui/icons-material/Email";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

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

export const CustomButton = styled(Button)({
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
});

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

//Login Styles
export const BoxTopStyled = styled(Box)({
  maxWidth: "100%",
  height: "98vh",

  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const BoxBelowStyled = styled(Box)({
  backgroundColor: "#233759",
  height: "420px",
  width: "450px",
  mt: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  px: 2,
});

export const TypographyStyled = styled(Typography)({
  textAlign: "center",
  fontWeight: "600",
});

export const FirstStackStyled = styled(Stack)({
  width: "100%",
});

export const SecondStackStyled = styled(Stack)({
  alignItems: "flex-start",
  width: "100%",
  px: "2rem",
});

export const CustomTextFieldStyled = styled(CustomTextField)({
  width: "100%",
  maxWidth: "400px",
});

export const DividerStyled = styled(Divider)({
  backgroundColor: "white",
  margin: "15px 0",
  width: "88%",
});

export const StyledVisibilityOffIcon = styled(VisibilityOffOutlinedIcon)({
  color: "#98a5b9",
});

export const StyledVisibilityOnIcon = styled(VisibilityOutlinedIcon)({
  color: "#98a5b9",
});

export const FormControlLabelStyled = styled(FormControlLabel)({
  color: "#98a5b9",
});

export const EmailIconStyled = styled(EmailIcon)({
  color: "#98a5b9",
});

export const HttpsOutlinedIconStyled = styled(HttpsOutlinedIcon)({
  color: "#98a5b9",
});
