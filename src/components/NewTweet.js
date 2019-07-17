import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
  //using a controlled component with local state because this state isn't used anywhere else in the app. Also because we need to update the ui on this state change (disable submit button)
  state = {   
    text: '',
    toHome: false,
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState(() => ({
      text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { text } = this.state
    const { dispatch, id } = this.props
    dispatch(handleAddTweet(text, id))
    this.setState(() => ({
      text: '',
      toHome: id ? false : true, //only go to home if we are composing new tweet - not replying 
    }))
  }

  render() {
    const { text, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }
    const tweetLeft = 280 - text.length

    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet) 