import { combineReducers } from 'redux'
import { reducer as oidcReducer } from 'redux-oidc'
import { connectRouter } from 'connected-react-router'
import { RECEIVE_DIRECTORSHIPS, REQUEST_DIRECTORSHIPS } from '../actions/get'

function apis (state = {
  isFetching: false
},
action) {
  switch (action.type) {
    case REQUEST_DIRECTORSHIPS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DIRECTORSHIPS:
      return Object.assign({}, state, {
        isFetching: false,
        directorships: action.directorships,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default (history) => combineReducers({
  router: connectRouter(history),
  oidc: oidcReducer,
  apis
})
