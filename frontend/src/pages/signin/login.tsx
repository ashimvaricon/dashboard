import { FormGroup, Stack, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BoxBelowStyled,
  BoxTopStyled,
  CustomButton,
  CustomTextFieldStyled,
  DividerStyled,
  EmailIconStyled,
  FirstStackStyled,
  FormControlLabelStyled,
  HttpsOutlinedIconStyled,
  StyledVisibilityOffIcon,
  StyledVisibilityOnIcon,
  TypographyStyled,
  WhiteCheckbox,
} from "./loginStyled";

import useAuth from "../signin/hooks/useAuth"; // Import the custom hook

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { authZodSchema } from "../../schema/authZodSchema";

const { schema } = authZodSchema();

type FormFields = z.infer<typeof schema>;

const Login: React.FC = () => {
  const { text, login, handleClick, error, isPending } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    login(data);
  };

  return (
    <BoxTopStyled>
      <BoxBelowStyled>
        <FirstStackStyled spacing={2.5}>
          <TypographyStyled variant="h5">
            Login to your account
          </TypographyStyled>
          <Stack
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ alignItems: "flex-start", width: "100%", px: "2rem" }}
            spacing={2.2}
          >
            <CustomTextFieldStyled
              id="outlined-required"
              label="username"
              type="text"
              {...register("username")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIconStyled />
                  </InputAdornment>
                ),
              }}
            />
            {errors.username && (
              <Typography variant="body2" color="error">
                {errors?.username?.message}
              </Typography>
            )}
            <CustomTextFieldStyled
              id="outlined-required"
              label="Password"
              type={text ? "text" : "password"}
              {...register("password")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsOutlinedIconStyled />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ cursor: "pointer" }}
                    onClick={handleClick}
                  >
                    {text ? (
                      <StyledVisibilityOffIcon />
                    ) : (
                      <StyledVisibilityOnIcon />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            {errors.password && (
              <Typography variant="body2" color="error">
                {errors?.password?.message}
              </Typography>
            )}
            <FormGroup>
              <FormControlLabelStyled
                control={<WhiteCheckbox defaultChecked />}
                label="Remember Me"
              />
            </FormGroup>

            <CustomButton
              type="submit"
              disabled={isPending}
              variant="contained"
            >
              {isPending ? "Logging In..." : "Log in"}
            </CustomButton>
            <DividerStyled />

            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
          </Stack>
        </FirstStackStyled>
      </BoxBelowStyled>
    </BoxTopStyled>
  );
};

export default Login;
