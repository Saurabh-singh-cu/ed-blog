import axios from "axios";
import swal from "sweetalert";

export const loginManual = async (email, password) => {
  try {
    let data = {
      username: email,
      password: password,
    };

    let config = {
      method: "POST",
      url: "https://apiedportfolio.unicornfortunes.com/api/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    let token = btoa(`${data.username}:${data.password}`);

    let localStorageObj = {
      accessToken: token,
    };
    localStorage.setItem("AdminSaurabh", JSON.stringify(localStorageObj));

    const response = await axios(config);
    const apiResponse = response.data;
    console.log(apiResponse, "API RESPONSE");

    if (apiResponse?.token) {
      window.location.href = "/";
    } else {
      window.location.href = "/login";
    }

    console.log(apiResponse, "TOKEN");
    swal({
      title: "Login Successful",

      icon: "success",
      button: "Close",
    });
  } catch (error) {
    swal({
      title: `${apiResponse?.data?.message}`,
      text: `${apiResponse?.data?.message}`,
      icon: "error",
      button: "Close",
    });
    console.log(error, "ERRORQQQQQQQQQQQQQQQ");
  }
};
