import React, { PropTypes } from 'react'
import Card from 'material-ui/Card'
import Radium from 'radium'
import {Link} from 'react-router'
class Course extends React.Component {
  render () {
    let styles={
      all:{
        margin: '0 2rem 4rem',
        flexBasis: '100%',
        '@media (min-width: 600px)': {
          flexBasis: 'calc(33.3% - 4rem)'
        }
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
          </div>
        </Card>
      </div>
    )
  }
}

export default Radium(Course);
