import React, { PropTypes } from 'react'
import Radium from 'radium'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import IconButton from 'material-ui/IconButton';

class CourseActions extends React.Component {
  render () {
    const {course}=this.props;
    let styles={
      all:{
        borderTop: '1px solid #e2e2e2',
        padding: '1.5rem',
        display:"flex",
        flexDirection: 'column',
        '@media (min-width: 600px)': {
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
        alignItems:"center"
      },
      likes:{
        width:"20px",
        height:"20px",
        fontSize:"1.4rem"
      },
      icon: {
        width: '18px',
        height: '18px',
        paddingRight: '6px',
        color:"#4c5765",
        border:"3px red solid"
      }
    }
    return(
      <div style={styles.all}>
        <div style={styles.button}>
          <IconButton tooltip="点赞o(*≧▽≦)ツ" onClick={this.props.increment.bind(null, parseInt(course.id) - 1)} key="1">
            <ActionThumbUp style={styles.icon} color="#4c5765"/>
          </IconButton>
          <div style={styles.likes}>{course.likes}</div>
        </div>
        <div style={styles.name}>
          {course.name}
        </div>
        <IconButton tooltip="评论一下(。-`ω´-)" style={styles.button} key="2">
          <CommunicationComment color="#4c5765"/>
        </IconButton>
      </div>
    )
  }
}

export default Radium(CourseActions);
