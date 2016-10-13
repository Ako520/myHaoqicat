import React, { PropTypes } from 'react'
// import courses from '../data/courses.js'
import Course from './Course.js'
import CommentBox from './CommentBox';

class ShowCourse extends React.Component {
    getStyles() {
     return {
       top: {
         backgroundColor: '#00bcd4',
         paddingTop: '3rem',
         paddingBottom: '1rem'
       },
       container: {
         maxWidth: '900px',
         margin: '0 auto',
       }
     };
   }
  render () {
    let styles=this.getStyles();
    const {courseId}=this.props.params;
    const comments = this.props.comments[courseId];
    const index = this.props.courses.findIndex((c) => c.id === courseId);
    const selectedCourse = this.props.courses[index];
    return(
      <div>
        <div style={styles.top}>
          <div style={styles.container}>
            <Course course={selectedCourse} comments={comments} increment={this.props.increment}/>
          </div>
        </div>
        <CommentBox courseComments={comments} {...this.props} />
      </div>
    )
  }
}

export default ShowCourse;
