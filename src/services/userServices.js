import axios from "axios";
const baseURL = "http://localhost:3001";
import Cookies from "js-cookie";

export async function signUp(data) {
  delete data.confirmPassword;

  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar: "https://i.imgur.com/xmI2QAo.jpg",
    background: "https://i.imgur.com/2OeZQ.jpg",
  };
  const response = await axios.post(`${baseURL}/user/create`, body);
  return response;
}

export async function signin(data) {
  const response = await axios.post(`${baseURL}/auth/login`, data);
  return response;
}

export async function userLogged() {
  const response = await axios.get(`${baseURL}/user/findById`, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });
  return response;
}

function generateUserName(name) {
  const withoutSpace = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${withoutSpace}-${randomNumber}`;
}
