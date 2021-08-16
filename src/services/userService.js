import axios from "axios";
import AverageSession from "./userAverageSessions";

const api = axios.create({
  baseURL: "http://localhost:3000/user/",
});

export function getUserMainData(userId) {
  return api
    .get(`${userId}`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function getUserActivityData(userId) {
  return api
    .get(`${userId}/activity`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}

export function getUserAverageSessionsData(userId) {
  return api
    .get(`${userId}/average-sessions`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function getUserPerformanceData(userId) {
  return api
    .get(`${userId}/performance`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}
