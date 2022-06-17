import axios from "axios";
export default class DataInfoService {
  getDataInfo() {
    return axios
      .get("https://62a6f20e97b6156bff8339c2.mockapi.io/datainfo")
      .then((res) => res.data);
  }
  postDataInfo(dataInfo) {
    return axios
      .post("https://62a6f20e97b6156bff8339c2.mockapi.io/customers", dataInfo)
      .then((res) => res.data);
  }
  deleteDataInfo(id) {
    return axios
      .delete(`https://62a6f20e97b6156bff8339c2.mockapi.io/customers/${id}`)
      .then((res) => res.data);
  }
}
