import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {details} = props
  const {id, name, logoUrl} = details

  return (
    <li className="course-item">
      <Link to={`/courses/${id}`}>
        <img src={logoUrl} alt={name} className="logo-img" />
        <p className="c-name">{name}</p>
      </Link>
    </li>
  )
}

export default CourseItem
