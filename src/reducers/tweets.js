import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

export default function tweets(state = {}, action) {
  switch(action.type) {
    case RECEIVE_TWEETS :
      return  {
        ...state,
        ...action.tweets
      }
    case TOGGLE_TWEET : 
      return {
        ...state,                //spread all the tweets onto new object
        [action.id]: {          //extract tweet with id - array destructuring
          ...state[action.id],  //spread all tweets properties onto new object
          likes: action.hasLiked === true //update likes property
          ? state[action.id].likes.filter((uid) => uid !== action.authedUser) //remove user from likes array
          : state[action.id].likes.concat([action.authedUser]) //add user to likes array
        }
      }
     case ADD_TWEET :
       const { tweet } = action
       let replyingTo = {}
       if(tweet.replyingTo !== null) {
         replyingTo = { //createnew object
           [tweet.replyingTo] : { //extracting tweet 'replyingto' id from array and setting it as the new object id
             ...state[tweet.replyingTo], //spread on all properties of tweet
             replies: state[tweet.replyingTo].replies.concat([tweet.id]) //update replies prop
           }
         }
       }
       return {
         ...state,
          [action.tweet.id] : action.tweet,
          ...replyingTo

       } 
      default:
        return state
  }
}