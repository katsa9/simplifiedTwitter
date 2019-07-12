import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/tweets'

const AUTHED_USER_ID = 'sarah_edo'

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