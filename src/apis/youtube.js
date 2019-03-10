import axios from "axios";

const KEY = "AIzaSyBX1HvCY_IGk4sN-e9pp8vi20JIkAqM2qg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
