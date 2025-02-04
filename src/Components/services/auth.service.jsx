import axios from "axios";

const API_URL = "http://localhost:3000/auth";

const signup = (email, password) => {
  
  try{
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
    })
    .then((response) => {
      //console.log(response.data.errors);
     
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data.errors?.map((error)=>console.log(error.msg)))
      return response.data;
    });
  }
  catch(error) {
    return error;
  }
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
     
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data.errors?.map((error)=>console.log(error.msg)))
      return response.data;
      
    });
 
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;