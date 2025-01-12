import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatiticLine = ({ text, value }) => (
  <>
  <td>
    {text}
  </td>
  <td>
    {value}
  </td>
    </>
)

const Statistic = (props) => {
  if (props.valueTotal === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <StatiticLine text={props.textGood} value={props.valueGood} />
        </tr>
        <tr>
          <StatiticLine text={props.textNeutral} value={props.valueNeutral} />
        </tr>
        <tr>
          <StatiticLine text={props.textBad} value={props.valueBad} />
        </tr>
        <tr>
          <StatiticLine text={props.testTotal} value={props.valueTotal} />
        </tr>
        <tr>
          <StatiticLine text={props.textAverage} value={props.valueAverage} />
        </tr>
        <tr>
          <StatiticLine text={props.textPositive} value={props.valuePositive + ' %'} />
        </tr>
      </tbody>
    </table>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistic
        textGood='good' valueGood={good}
        textNeutral='neutral' valueNeutral={neutral}
        textBad='bad' valueBad={bad}
        testTotal='all' valueTotal={good + neutral + bad}
        textAverage='average' valueAverage={(good - bad) / (good + neutral + bad)}
        textPositive='positive' valuePositive={(good * 100) / (good + neutral + bad)}
      />
    </div>
  )
}

export default App