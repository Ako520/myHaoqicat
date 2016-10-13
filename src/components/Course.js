import React, { PropTypes } from 'react'
import Card from 'material-ui/Card'
import Radium from 'radium'
import {Link} from 'react-router'
import CourseActions from './CourseActions.js'
import CSSTransitionGroup from 'react-addons-css-transition-group';
class Course extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     likes:this.prcourse.likes
  //   }
  // }
  // addlikes(){
  //   this.setState({
  //     likes:course.likes+1
  //   });
  // }
  render () {
    let styles={
      all:{
        margin: '0 2rem 4rem',
        flexBasis: '100%',
        '@media (min-width: 640px) and (max-width:975px)': {
          flexBasis: 'calc(50% - 4rem)'
        },
        '@media (min-width: 975px)': {
          flexBasis: 'calc(33.3% - 4rem)'
        },
      },
      imgWrap: {
        position: 'relative'
      },
      img: {
        width: '100%',
        display: 'block'
      }
    }
    let course=this.props.course
    return(
      <div style={styles.all}>
        <Card>
          <div style={styles.imgWrap}>
            <Link to={`/view/${course.id}`}>
              <img src={course.image} alt={course.name} style={styles.img} />
            </Link>
            <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              <span key={course.likes} className="likes-heart">{course.likes}</span>
            </CSSTransitionGroup>
          </div>
          <CourseActions course={course}  comments={this.props.comments} increment={this.props.increment}/>
        </Card>
      </div>
    )
  }
}

export default Radium(Course);
