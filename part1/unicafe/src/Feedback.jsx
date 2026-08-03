import Button from "./Button.jsx";

const Feedback = () => <div>
    <h3>Feedback</h3>
    <Button text="good" handler={() => console.log("Good feedback")}></Button>
    <Button text="neutral" handler={() => console.log("Neutral feedback")}></Button>
    <Button text="bad" handler={() => console.log("Bad feedback")}></Button>
</div>

export default Feedback
