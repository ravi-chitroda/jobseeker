import axios from "axios";
import { useEffect } from "react";

const setDataToBackEnd = async (requestData) => {
  console.log("request", requestData);
  return axios
    .post("http://localhost:3001/api/blogs", {
      name: requestData.name,
      email: requestData.email,
      password: requestData.password,
    })
    .then((res) => {
      console.log("res1", res.status);
      if (res?.data?.error) {
        //or we can write this condition as if (res?.status = 200){return....}  200 = "success"
        return {
          error: "error",
          message: "already user created",
        };
      } else {
        return res.data;
      }
    });
};

// useEffect(() => {
//     axios.get("http://localhost:3001/api/blogs").then(response => console.log)
//     console.log("getData", getDataFromBackEnd);
// }, [])

export default setDataToBackEnd;
