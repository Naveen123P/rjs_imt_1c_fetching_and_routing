import Loader from 'react-loader-spinner'
import './index.css'

const LoaderView = () => (
  <div data-testid="loader" className="loader-style">
    <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
  </div>
)

export default LoaderView
