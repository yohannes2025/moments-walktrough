import axios from 'axios';
axios.defaults.baseURL =
  "https://moments-walkthough-b1ce7c2fea83.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;