import axios from "axios";

axios.defaults.baseURL = "https://celebraton-server.herokuapp.com/";

const setAuthToken = token => {
  if (token) {
    //apply to every axios request
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    //delete Auth Header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
