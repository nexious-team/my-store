import axios from "axios";
import ENV from "../config/config.json";
import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";

export async function register(data) {
  try {
    return await axios
      .post(ENV.API_ENDPOINT + "user/signup", {
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem(ENV.APP_TOKEN, response.data.payload.token);
      })
      .catch((ex) => {
        console.log(ex);
        throw new Error(ex);
      });
  } catch (ex) {
    throw new Error(ex);
  }
}

export async function login(email, password) {
  try {
    return await axios
      .post(ENV.API_ENDPOINT + "user/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(ENV.APP_TOKEN, response.data.payload.token);
      })
      .catch((ex) => {
        // console.log(ex);
        throw new Error(ex);
      });
  } catch (ex) {
    throw new Error(ex);
  }
}

export function getCurrentUser() {
  const token = localStorage.getItem(ENV.APP_TOKEN);
  const dateNow = new Date();
  try {
    const user = jwtDecode(token);
    if (user.exp < dateNow.getTime() / 1000) {
      console.log(user.exp);
      console.log(dateNow.getTime() / 1000);
      localStorage.removeItem("userToken");
      return null;
    }
    return user.username;
  } catch (ex) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(ENV.APP_TOKEN);
}

export default {
  register,
  logout,
  login,
  getCurrentUser,
};
