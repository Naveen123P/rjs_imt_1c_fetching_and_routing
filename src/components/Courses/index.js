import {Component} from 'react'
import Header from '../Header'
import CourseItem from '../CourseItem'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN-PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Courses extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    courses: [],
  }

  componentDidMount() {
    this.getCourses()
  }

  formattedData = each => ({
    id: each.id,
    name: each.name,
    logoUrl: each.logo_url,
  })

  getCourses = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    // console.log(response)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.courses.map(each => this.formattedData(each))
      //   console.log(updatedData)
      this.setState({
        courses: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {courses} = this.state
    console.log(courses)
    return (
      <div className="courses-bg">
        <h1 className="heading">Courses</h1>
        <ul className="courses-list">
          {courses.map(each => (
            <CourseItem key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }

  retry = () => {
    this.getCourses()
  }

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.failure:
        return <FailureView retry={this.retry} />
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderAllViews()}
      </>
    )
  }
}

export default Courses
