import React, { PropTypes } from 'react'
import Radium from 'radium'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionHighlightOff from 'material-ui/svg-icons/action/highlight-off';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router'

class CourseActions extends React.Component {
  render () {
    const {course}=this.props;
    let styles={
      all:{
        borderTop: '1px solid #e2e2e2',
        padding: '1.5rem',
        display:"flex",
        flexDirection: 'column',
        '@media (min-width: 426px)': {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      },
      name: {
        color: '#4c5765',
        fontSize: '1.7rem',
        marginBottom: '20px',
        textAlign: 'center',
        '@media (min-width: 600px)': {
          marginBottom: 0,
        }
      },
      button:{
        backgroundColor: '#f2f4f6',
        color: '#4c5765',
        display:"flex",
        alignItems:"center",
        textDecoration:"none"
      },
      likes:{
        width:"20px",
        height:"20px",
        fontSize:"1.4rem"
      },
      icon: {
        width: '24px',
        height: '24px',
        color:"#4c5765",
      }
    }
    return(
      <div style={styles.all}>
        <div style={styles.button}>
          <IconButton tooltip="点赞o(*≧▽≦)ツ" iconStyle={styles.icon} onClick={this.props.increment.bind(null, parseInt(course.id) - 1)} key="1">
            <ActionThumbUp  color="#4c5765"/>
          </IconButton>
          <div style={styles.likes}>{course.likes}</div>
        </div>
        <div style={styles.name}>
          {course.name}
        </div>
        <Link to={`/view/${course.id}`} style={styles.button}>
          <IconButton tooltip="评论一下(。-`ω´-)"  iconStyle={styles.icon} style={styles.button} key="2">
            <CommunicationComment color="#4c5765"/>
          </IconButton>
          <div style={styles.likes}>{this.props.comments ? this.props.comments.length.toString():"0"}</div>
        </Link>
      </div>
    )
  }
}

export default Radium(CourseActions);
