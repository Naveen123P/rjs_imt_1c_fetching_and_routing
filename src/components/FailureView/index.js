import './index.css'

const FailureView = props => {
  const {retry} = props

  const onClickRetry = () => {
    retry()
  }

  return (
    <div className="failure-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="f-heading">Oops! Something Went Wrong</h1>
      <p className="para">
        We cannot seem to find the page you are looking for
      </p>
      <button type="button" onClick={onClickRetry} className="retry-button">
        Retry
      </button>
    </div>
  )
}

export default FailureView
