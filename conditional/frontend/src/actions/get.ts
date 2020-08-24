import fetch from 'cross-fetch'

// Replace with useFetch hooks

// Credit to @ramzallan in tonic

export const REQUEST_DIRECTORSHIPS = 'REQUEST_DIRECTORSHIPS'
export const RECEIVE_DIRECTORSHIPS = 'RECEIVE_DIRECTORSHIPS'

export function requestDirectorships () {
  return {
    type: REQUEST_DIRECTORSHIPS
  }
}

export function receiveDirectorships (json) {
  return {
    type: RECEIVE_DIRECTORSHIPS,
    directorships: json,
    receivedAt: Date.now()
  }
}

// eslint-disable-next-line no-unused-vars
export function GET (accessToken, route) {
  return fetch(route, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  })
}

export function fetchDirectorships (dispatch, accessToken) {
  dispatch(requestDirectorships())
  return GET(accessToken, '/api/attendance/directorships')
    .then(response => response.json())
    .then(json => dispatch(receiveDirectorships(json)))
}
