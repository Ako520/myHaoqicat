import React, { PropTypes } from 'react'
// import courses from '../data/courses.js'
import Course from './Course.js'

class Courses extends React.Component {
  render () {
    let styles={
      all:{
        maxWidth:"1200px",
        display:"flex",
        flexWrap:"wrap",
        margin:"0 auto",
        paddingTop:"6rem",
        paddingBottom:"6rem"
      }
    }
    return(
      <div style={styles.all}>
        {this.props.courses.map((item,i) => {
          return(
            <Course key={i} increment={this.props.increment} comments={this.props.comments[item.id]} course={item}/>
          )
        })}
      </div>
    )
  }
}

export default Courses;
