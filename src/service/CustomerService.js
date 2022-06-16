export default class CustomerService {
  getCustomersLarge() {
    return fetch("https://62a6f20e97b6156bff8339c2.mockapi.io/customers").then(
      (res) => res.json()
    );
  }
  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";
    return fetch(
      "https://www.primefaces.org/data/customers?" + queryParams
    ).then((res) => res.json());
  }
}
