import './message.css'

const Message = ({ message, error }) => {
  if (message === null) {
    return null
  }

  const text = error? `Information of ${message} has already been removed from server`: `Added ${message}`
  const divClass = error ? "error" : "message"

  return (
    <div className={divClass}>
        {text}
    </div>
  )
}

export default Message;
