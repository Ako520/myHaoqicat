import { createStore, compose } from 'redux';  // createStore 是用来创建store容器的   compose是用来在项目中使用
// ※redux-devtools-extension 调试工具 这个还不知道是什么
import { syncHistoryWithStore} from 'react-router-redux';
//  react-router-redux 包并不是 Redux 项目必须的，用它则可以在 redux-devtools-extension 中显示页面浏览历史，不用它 Redux 和 React Router 也可以在一起完美工作。  ※我想应该是配合redux-devtools-extension浏览历史吧不知道对不对
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import comments from './data/comments';
import courses from './data/courses';


const defaultState = {
  courses: courses,
  comments: comments
};

const store = createStore(rootReducer, defaultState);


export const history = syncHistoryWithStore(browserHistory, store);
export default store;
