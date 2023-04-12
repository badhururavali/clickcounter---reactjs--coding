import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg_container">
        <h1 className="heading">
          The Button has been clicked<span className="counter"> {count} </span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count"</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
