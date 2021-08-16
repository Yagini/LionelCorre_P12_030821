import axios from "axios";

export function getUserMainData(userId) {
  return axios(`http://localhost:3000/user/${userId}`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getUserActivityData(userId) {
  return axios(`http://localhost:3000/user/${userId}/activity`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getUserAverangeSessionsData(userId) {
  return axios(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getUserPerformanceData(userId) {
  return axios(`http://localhost:3000/user/${userId}/performance`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
