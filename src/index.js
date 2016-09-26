import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main.js'
import Courses from './components/Courses.js'
import ShowCourse from './components/ShowCourse.js'
import { Router, Route,browserHistory,IndexRoute } from 'react-router'
const router=(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Courses}/>
      <Route path="/view/:courseId" component={ShowCourse}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
