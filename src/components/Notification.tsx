interface Props {
  message: string
  succes: boolean
}

function Notification({ message, succes }: Props) {
  return (
    <div className="notification">
      <div className="content">
        <div
          className={succes ? 'identifier succes' : 'identifier error'}></div>
        <div className="text">{message}</div>
      </div>
    </div>
  )
}

export default Notification
