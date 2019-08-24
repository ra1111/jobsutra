import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Works from './Works'
import About from './About'
import PostJob from './PostJob'
import Student from './Student'
import Checkout from'./Payment'
const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Works}/>
      <Route path="/about" component={About}/>
      <Route path='/post-job' component={PostJob}/>
      <Route path='/student' component={Student}/>
      <Route path='/payment' component={Checkout}/>
    </Switch>
  )
}
 
export default Content