import axios from "axios";

export default class CountryService {
  getCountries() {
    return axios
      .get("https://62a6f20e97b6156bff8339c2.mockapi.io/countries")
      .then((res) => res.data);
  }
}
