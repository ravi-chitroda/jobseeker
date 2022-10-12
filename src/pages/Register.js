import React, { useEffect, useState } from "react";
import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import setDataToBackEnd from "../backend/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   isMember: true,
// };

const Register = () => {
  // const [allValue, setAllValue] = useState(initialState);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  // demo to get data from database
  useEffect(() => {
    axios.get("http://localhost:3001/api/blogs").then((response) => {
      setPost(response.data);
    });
  }, []);

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  // };
  const onSubmit = async (data) => {
    const response = await setDataToBackEnd({
      name: data.fName,
      email: data.email,
      password: data.password,
    });
    if (response?.error) {
      setError("User is already Registered, Kindly check your data");
      alert("Register with other Credential");
    } else {
      navigate("/");
    }
  };

  // const checkVal = (val) => {
  //   console.log(val);
  // };

  return (
    <Container>
      <Box>
        <Typography variant="h3">
          {/* {allValue.isMember ? "Login" : "Register"} */}
        </Typography>
      </Box>

      <Controller
        render={(props) => (
          <TextField
            {...props}
            style={{ width: "40vw" }}
            sx={{ margin: "2px" }}
            label="First Name"
            {...register("fName", {
              required: "First name is required",
              minLength: {
                value: 3,
                message: "minimum 3 character required",
              },
            })}
            // onChange={(e) => checkVal(e.target.value)}
          />
        )}
        name="fName"
        control={control}
        defaultValue=""
      />
      {/* {errors.fName && <p>This field must be filled</p>} */}
      {errors?.fName && (
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
          {errors.fName.message}
        </Box>
      )}

      <Controller
        render={(props) => (
          <TextField
            {...props}
            style={{ width: "40vw" }}
            sx={{ margin: "2px" }}
            label="E-mail"
            {...register("email", {
              required: "email is mandatory",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "please Enter Valid Email address",
              },
            })}
            // onChange={(e) => checkVal(e.target.value)}
          />
        )}
        name="email"
        control={control}
        defaultValue=""
      />
      {/* {errors.email && <p>This field must be filled</p>} */}
      {errors?.email && (
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

      {/* Password */}
      <Controller
        render={(props) => (
          <TextField
            {...props}
            style={{ width: "40vw" }}
            sx={{ margin: "2px" }}
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
            // onChange={(e) => checkVal(e.target.value)}
          />
        )}
        name="password"
        control={control}
        defaultValue=""
      />
      {/* {errors.password && <p>This field must be filled</p>} */}
      {errors?.password && (
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
          {errors.password.message}
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit(onSubmit)}
      >
        Register
      </Button>
    </Container>
  );
};

export default Register;
