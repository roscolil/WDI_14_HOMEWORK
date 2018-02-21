import React from 'react'
import './PasswordEstimator.scss'

export default class PasswordEstimator extends React.Component {
  constructor(props) {
    super(props)
    this.validatePassword = this.validatePassword.bind(this)
    this.state = {
      content: ""
    }
  }

  validatePassword(event) {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    let content = this.state.content
    let message = ""
    const regEx1 = new RegExp ("^(?=.*[a-z])")
    const regEx2 = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])")
    const regEx3 = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})")
    const regEx4 = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})(?=.*[0-9])")
    const regEx5 = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})(?=.*[0-9])(?=.[!@#\$%\^&])")

    const point1Msg = "That's a poor excuse for a password"
    const point2Msg = "C'mon, you can do better than that"
    const point3Msg = "Perhaps i was quick to judge. But you can make it better"
    const point4Msg = "You're so close i can smell it"
    const point5Msg = "Congratulations. You qualify for a job in cryptography at the NSA"

  // This logic could be moved into it's own file in the lib folder but i ran out of time
    if (content.length === 0) {
      message = "Enter your password"
    } else if (regEx5.test(content)) {
      message = point5Msg
    } else if (regEx4.test(content)) {
      message = point4Msg
    } else if (regEx3.test(content)) {
      message = point3Msg
    } else if (regEx2.test(content)) {
      message = point2Msg
    } else if (regEx1.test(content)) {
      message = point1Msg
    }

    return (<div className="password">
      <input className="password__input" onChange={this.validatePassword}></input>
      <footer className="password__footer">
        <span>{message}</span>
      </footer>
    </div>)
  }
}
