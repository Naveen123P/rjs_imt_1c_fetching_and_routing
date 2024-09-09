import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  render() {
    console.log('OOOM...')
    return (
      <>
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route exact path="/courses/:id" component={CourseDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </>
    )
  }
}

export default App
