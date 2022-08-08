import axios from "axios";
const instance = axios.create({  
  baseURL: "http://3.39.124.177:8080/pos",

  headers: {    
    'Content-Type': 'application/json; charset=UTF-8'
  },
})


export default instance;
