# 使用react-redux的正确姿势

## 创建store.js (src/store.js)
1. 把要用到的数据存在一个对象中

```js
// createStore 是用来创建store容器的   compose是用来在项目中使用
import { createStore, compose } from 'redux';  
//  react-router-redux 包并不是 Redux 项目必须的，用它则可以在 redux-devtools-extension 中显示页面浏览历史，不用它 Redux 和 React Router 也可以在一起完美工作。
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
//用来创建store,名字是可以随便起的
import rootReducer from './reducers/index';

//下面两个是拿本地的数据 以后可能是网上的数据库
import comments from './data/comments';
import courses from './data/courses';


// 先把得到的数据建成一个对象
const defaultState = {
  courses: courses,
  comments: comments
};

// 把数据对象和reducer文件里的逻辑文件合并成的rootReducer用createStore创建出store
const store = createStore(rootReducer, defaultState);


// 这个是用来配合谷歌工具方便调试的
export const history = syncHistoryWithStore(browserHistory, store);

export default store;

```
2. 创建src/action/index.js

```js
// INCREMENT_LIKES 和 ADD_COMMENT 和 REMOVE_COMMENT 这三个东西类似与暗号 名字最好大写 并且起的贴切一些
export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


//action 实际上就是一个对象,其中的type属性是必须的,而且里面要有上面的暗号,后面跟着的是以后要用的属性.这里是把他们封成了一个函数导出
export function increment(index) {
  return { type: INCREMENT_LIKES, index } //action是这里的对象
}

export function addComment(courseId, author, comment) {
  return { type: ADD_COMMENT, courseId, author, comment }
}

export function removeComment(courseId, i) {
  return { type: REMOVE_COMMENT, i, courseId }
}

```

3. 这回该reducer了~

```js
// reducer/comments.js  这个控制comments的state值


function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;


// reducer/courses.js  这个控制coureses的state值


function courses(state=[],action) {
  console.log("course here");
  console.log(state,action);
  return state
}



export default courses;



// reducers/index.js 把关于state的逻辑js合并


import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux';

import courses from './courses.js'
import comments from './comments.js'

// 最终本案例的状态树是这样的：
// {
//   courses: courses,
//   comments: comments,
//   routing: routerReducer
// }
// 这个 JS 对象的每一个 key 对应着存储在 store 中的一个状态变量的名字，每一个 value 则对应着一个 reducer，决定着状态变量值。
const rootReducer = combineReducers({courses,comments,routing:routerReducer})

export default rootReducer
```

4. React 和 Redux 搭建友谊的小船

修改 src/index.js 文件，修改代码如下：
```js
// 把<Provider>标签放在最顶层(root component)以此来使用store
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      ...
    </Router>
  </Provider>
)
```

5. 读取 Store 中的 Courses State

1. **创建一个 Container 组件 App(一般不叫App.js,自己想一个吧,因为一般项目App.js已经存在了)**

新建文件 components/App.js，添加如下代码：
```js
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Main from './Main';

function mapStateToProps(state) {
  return {
    courses: state.courses,
    comments: state.comments
  }
}
//把reducers文件夹里的comments.js和courses.js和dispatch绑定起来
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
```

2. 使用 App 组件

修改 index.js 文件，修改代码：

```js
import App from './components/App';

<Route path="/" component={App}>
  ...
</Route>
```

3. 读取 Courses 的 State

修改 components/Main.js 文件，用下面一行代码代替 { this.props.children }
```js
{ React.cloneElement(this.props.children, this.props) }
```
这样，才能在 Courses 和 ShowCourse 组件中通过代码 this.props.courses 获取 store 中的 courses 状态值。

修改 Courses 组件

然后，打开 components/Courses.js 文件，注释掉下面一行代码：
`import courses from '../data/courses';`
在代码开头添加双斜杠 // 符号，改成这样：

`// import courses from '../data/courses';`

修改 ShowCourse 组件

按照修改 Courses 组件的思路，修改 ShowCourse 组件，注释掉下面一行代码：

`import courses from '../data/courses';`
改成这样：

`// import courses from '../data/courses';`
然后，把下面两行代码：

`const index = courses.findIndex((c) => c.id === courseId);
const selectedCourse = courses[index];`
改成这样：

`const index = this.props.courses.findIndex((c) => c.id === courseId);
const selectedCourse = this.props.courses[index];`

6. 更新 Store 中的 Courses State
 1. 修改 Courses 组件
```js
<Course increment={this.props.increment} key={i} course={course} />
```
 2. 修改 Course 组件

删除以下代码：
```js
constructor(props) {
  super(props);
  this.state = {
    likes: this.props.course.likes
  }
}

increment() {
  this.setState({likes: this.state.likes + 1})
}
```
然后，把下面一行代码：

`<span key={this.state.likes} className="likes-heart">{this.state.likes}</span>`
修改成这样：

`<span key={course.likes} className="likes-heart">{course.likes}</span>`
再把下面一行代码：

`<CourseActions course={course} increment={this.increment.bind(this)} likes={this.state.likes}/>`
修改成这样：

`<CourseActions course={course} increment={this.props.increment} />`
 3. 修改 CourseActions 组件

把下面一行代码：

`<button style={styles.button} onClick={this.props.increment} key='1'>`
修改成这样：

`<button style={styles.button} onClick={this.props.increment.bind(null, parseInt(course.id) - 1)} key='1'>`
然后，再把下面一行代码：

`<div>{this.props.likes}</div>`
修改成这样

`<div>{course.likes}</div>`
 4. 修改 ShowCourse 组件

把下面一行代码：

`<Course course={selectedCourse} />`
修改成这样：

`<Course course={selectedCourse} increment={this.props.increment} />`
 5. 修改 Courses Reducer

打开 reducers/courses.js 文件，清空原来的代码，添加如下代码：
```js
import { INCREMENT_LIKES } from '../actions';

function courses(state = [], action) {
  switch(action.type) {
    case INCREMENT_LIKES :
      const i = action.index;
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }
}

export default courses;
Reducer 必须是一个 pure function
```
