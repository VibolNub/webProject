console.log('hello')
console.log('sursdey')
const url = "http://api.weatherapi.com/v1";
fetch(url, {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Auth-Token": "f35eda819bbe4c22a9d123248231003 ",
    "Content-Type": "application/json"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });