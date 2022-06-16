export default class CountryService {
  getCountries() {
    return fetch("https://62a6f20e97b6156bff8339c2.mockapi.io/countries", {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  }
}
