import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_USER_ID = 'sarah_edo'

//thunk action creator as it returns a function
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({tweets, users}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_USER_ID))
      })
  }
}