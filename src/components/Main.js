import React, { PropTypes } from 'react'
import Courses from './Courses.js'
import Radium,{StyleRoot} from 'radium'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Main extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    let styles={
      all:{
      },
      header:{
        background:"rgb(17, 146, 163)",
        height:"8.4rem",
        textAlign:"center",
        fontFamily: 'sans-serif'
      },
      logo:{
        fontSize:'3rem',
        fontWeight:"600",
        color:"#fff",
        letterSpacing: '-1px',
        lineHeight:"8.4rem"
      }
    }
    return(
      <StyleRoot style={styles.all}>
        <header style={styles.header}>
          <div style={styles.logo}>Haoqicat</div>
        </header>
        {this.props.children}
      </StyleRoot>
    )
  }
}
Main.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Radium(Main);
