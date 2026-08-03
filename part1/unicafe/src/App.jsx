import { useState } from 'react'
import Statistics from "./Statistics.jsx"
import Button from "./Button.jsx";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>Feedback</h3>
      <Button text="good" handler={() => setGood(good + 1)}></Button>
      <Button text="neutral" handler={() => setNeutral(neutral + 1)}></Button>
      <Button text="bad" handler={() => setBad(bad + 1)}></Button>
      <h3>Statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App
