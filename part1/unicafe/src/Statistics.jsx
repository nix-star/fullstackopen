import StatisticLine from "./StatisticLine.jsx"

const Statistics = ({good, neutral, bad}) => <div>
    <StatisticLine text="good" value={good}></StatisticLine>
    <StatisticLine text="neutral" value={neutral}></StatisticLine>
    <StatisticLine text="bad" value={bad}></StatisticLine>
    <StatisticLine text="all" value={good + neutral + bad}></StatisticLine>
    <StatisticLine text="average" value={(good - bad) / (good + neutral + bad || 1)}></StatisticLine>
    <StatisticLine text="positive" value={good / (good + neutral + bad || 1) * 100  + " %"}></StatisticLine>
</div>

export default Statistics
