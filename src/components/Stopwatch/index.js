import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInSeconds: 0, isRunning: false}

  onStart = () => {
    this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    this.setState({isRunning: true})
  }

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({timeElapsedInSeconds: 0, isRunning: false})
  }

  onStop = () => {
    clearInterval(this.intervalId)
    this.setState({isRunning: false})
  }

  getTime = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.ceil(timeElapsedInSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isRunning} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="timer-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="stopwatch-time">{this.getTime()}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="btn start"
              onClick={this.onStart}
              disabled={isRunning}
            >
              Start
            </button>
            <button type="button" className="btn stop" onClick={this.onStop}>
              Stop
            </button>
            <button type="button" className="btn reset" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
