import { notification } from "antd";
import axios from "axios";
import CircularJSON from "circular-json";

export const loginManual = async (email, password) => {
  try {
    let data = {
      username: email,
      password: password,
    };

    let config = {
      method: "POST",
      url: "http://172.17.18.255:8080/api/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios(config);
    const apiResponse = response.data;

    let localStorageObj = {
      accessToken: apiResponse?.token,
    };
    localStorage.setItem("AdminSaurabh", JSON.stringify(localStorageObj));
    if (apiResponse?.token) {
      window.location.href = "/";
    } else {
      window.location.href = "/login";
    }

  
    console.log(apiResponse, "TOKEN");
  } catch (error) {
    console.log(error, "ERROR");
  }
};
