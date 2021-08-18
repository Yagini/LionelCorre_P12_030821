import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/user/",
});

/**
 * Get the user main data from the API
 * @param {object} response the promise async function await response from the API
 * @param {object} error the catch error if they have an error
 * @param {number} userId
 * @returns {void}
 */
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

/**
 * Get the user activity data from the API
 * @param {object} response the promise async function await response from the API
 * @param {object} error the catch error if they have an error
 * @param {number} userId
 * @returns {void}
 */
export function getUserActivityData(userId) {
  return api
    .get(`${userId}/activity`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

/**
 * Get the user average sessions data from the API
 * @param {object} response the promise async function await response from the API
 * @param {object} error the catch error if they have an error
 * @param {number} userId
 * @returns {void}
 */
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

/**
 * Get the user performance data from the API
 * @param {object} response the promise async function await response from the API
 * @param {object} error the catch error if they have an error
 * @param {number} userId
 * @returns {void}
 */
export function getUserPerformanceData(userId) {
  return api
    .get(`${userId}/performance`)
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
