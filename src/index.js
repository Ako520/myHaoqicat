import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main.js'
import './styles/style.css'
// import './styles/s2.css'
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

// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
//
// var TodoList = React.createClass({
//   getInitialState: function() {
//     return {items: ['hello', 'world', 'click', 'me']};
//   },
//   handleAdd: function() {
//     var newItems =
//       this.state.items.concat([prompt('Enter some text')]);
//     this.setState({items: newItems});
//   },
//   handleRemove: function(i) {
//     var newItems = this.state.items.slice();
//     newItems.splice(i, 1);
//     this.setState({items: newItems});
//   },
//   render: function() {
//     var items = this.state.items.map(function(item, i) {
//       return (
//         <div key={item} onClick={this.handleRemove.bind(this, i)}>
//           {item}
//         </div>
//       );
//     }.bind(this));
//     return (
//       <div>
//         <button onClick={this.handleAdd}>Add Item</button>
//         <ReactCSSTransitionGroup
//           transitionName="example"
//           transitionEnterTimeout={500}
//           transitionLeaveTimeout={300}>
//           {items}
//         </ReactCSSTransitionGroup>
//       </div>
//     );
//   }
// });
//
//
// render(<TodoList/>, document.getElementById('root'));
