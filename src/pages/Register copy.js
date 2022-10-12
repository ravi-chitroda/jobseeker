import React, { useState } from "react";
import { Box, Container, FormControl, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  SettingsSystemDaydreamOutlined,
  TextFields,
} from "@mui/icons-material";

// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   isMember: true,
// };

const Register = () => {
  // const [allValue, setAllValue] = useState(initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  console.log("name", name);

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  // };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <FormControl>
        <Box>
          <Typography variant="h3">
            {/* {allValue.isMember ? "Login" : "Register"} */}
          </Typography>
        </Box>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "40vw",
          }}
        >
          {/* <Controller
          render={(props) => (
            <TextFields
              {...props}
              style={{ width: "40vw" }}
              sx={{ m: 2 }}
              label="name"
              {...register("name", {
                required: "name is Required",
                minLength: {
                  value: 3,
                  message: "minimum 3 character required",
                },
              })}
              name="name"
              handleChange={(e) => setName(e.target.value)}
              control={control}
              value={name}
              defaultValue=""
            />
          )}
        />
        {errors.allValue.name && (
          <Box
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flex: 1,
              width: "100%",
              color: "red",
              fontSize: "small",
              fontStyle: "oblique",
            }}
          >
            {errors.allValue.name.message}
          </Box>
        )} */}

          <Controller
            render={(props) => (
              <TextField
                {...props}
                style={{ width: "40vw" }}
                sx={{ margin: "2px" }}
                label="name"
                {...register("fName", {
                  required: "First name is required",
                  minLength: {
                    value: 3,
                    message: "minimum 3 character required",
                  },
                })}
              />
            )}
            name="name"
            control={control}
            defaultValue=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* {errors.fName && <p>This field must be filled</p>} */}
          {errors.name && (
            <Box
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flex: 1,
                width: "100%",
                color: "red",
                fontSize: "small",
                fontStyle: "oblique",
              }}
            >
              {errors.name.message}
            </Box>
          )}

          <Controller
            render={(props) => (
              <TextField
                style={{ width: "40vw" }}
                sx={{ margin: "2px" }}
                {...props}
                label="email"
                {...register("email", {
                  required: "email is mandatory",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "please Enter Valid Email address",
                  },
                })}
              />
            )}
            name="email"
            control={control}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <Box
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flex: 1,
                width: "100%",
                color: "red",
                fontSize: "small",
                fontStyle: "oblique",
              }}
            >
              {errors.email.message}
            </Box>
          )}

          <Controller
            render={(props) => (
              <TextField
                sx={{
                  margin: "2px",
                  width: { xs: "100%", md: "80%", sm: "60%" },
                }}
                {...props}
                label="password"
                {...register("password", {
                  required: "Password must be required",
                  pattern: {
                    value:
                      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:
                      "Password with minimum 8 character Upper & Lower case with symbol",
                  },
                })}
              />
            )}
            name="password"
            control={control}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <Box
              style={{
                display: "block",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flex: 1,
                width: "100%",
                color: "red",
                fontSize: "small",
                fontStyle: "oblique",
              }}
            >
              {errors.password.message}
            </Box>
          )}
          <TextField
            type="submit"
            style={{
              width: "50%",
              backgroundColor: "blueviolet",
              color: "snow",
            }}
            variant="contained"
            color="primary"
          />
        </form>
      </FormControl>
    </Container>
  );
};

export default Register;
