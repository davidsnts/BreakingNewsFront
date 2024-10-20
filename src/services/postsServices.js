import axios from "axios";

const baseURL = "http://localhost:3001";

export async function getAllPosts() {
  const response = await axios.get(`${baseURL}/posts`);    
  return response;
}


export async function getTopPost() {
  const response = await axios.get(`${baseURL}/posts`);    
  return response;
}