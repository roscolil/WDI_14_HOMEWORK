import React from 'react'
import PasswordEstimator from './PasswordEstimator'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>Password estimator</h1>
      <PasswordEstimator />
    </div>
  }

}
