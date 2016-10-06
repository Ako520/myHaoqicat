import React, { PropTypes } from 'react'
// import courses from '../data/courses.js'
import Course from './Course.js'

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
    const index = this.props.courses.findIndex((c) => c.id === courseId);
    const selectedCourse = this.props.courses[index];
    return(
      <div>
        <div style={styles.top}>
          <div style={styles.container}>
            <Course course={selectedCourse} increment={this.props.increment}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowCourse;
