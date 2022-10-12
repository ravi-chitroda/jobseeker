import { Box, FormControlLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <FormControlLabel>
      <Controller>
        <Box>
          <label htmlFor={name}>{labelText || name}</label>
          <TextField
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
          />
        </Box>
      </Controller>
    </FormControlLabel>
  );
};
export default FormRow;
