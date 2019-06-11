import { handleResponse, handleError, API_HOST } from "./apiUtils";
const baseUrl = `${API_HOST}/authors/`;

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
