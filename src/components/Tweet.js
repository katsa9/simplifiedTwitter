import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'

class Tweet extends Component {
  render() {
    console.log(this.props)
    const { tweet } = this.props

    if(tweet === null) {
      return <p>This tweet doesn't exist</p>
    }
    return(
      <div className='tweet'>

      </div>
    )
  }
}

function mapStateToProps({users, tweets, authedUser}, {id}) { //second object is the props passed from the parent component
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null
  return {
    authedUser,
    tweet: tweet 
      ? formatTweet(tweet, users[tweet.author, authedUser], parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet)