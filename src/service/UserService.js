import axios from "axios";
const urlApi = "https://62a6f20e97b6156bff8339c2.mockapi.io/users";

export default class UserService {
  getUser() {
    return axios.get(urlApi).then((res) => res.data);
  }
  deleteUsers(id) {
    return axios
      .delete(`https://62a6f20e97b6156bff8339c2.mockapi.io/users/${id}`)
      .then((res) => console.log(res.data));
  }
}
