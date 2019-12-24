import React from 'react';
import './styles.css';
import { useHistory } from "react-router-dom";

import icon from '../../images/icon.jpeg'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin-icon.jpg'
import gitlab from '../../images/gitlab.png'
import github from '../../images/github.svg'

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    marginTop: 50,
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

function Home() {
  const classes = useStyles()
  let history = useHistory()

  return (
      <div class="container demo">
        <div class="content">
            <div id="large-header" class="large-header">
                  <div class="container-box">
                    <div className="container-icon">
                      <img src ={icon} className="icon" />
                    </div>

                    <span class="text-name">Luis Filipe Alves de Oliveira</span>
                    <span class="text-dev">Coding since two years and making dream come true with React & React Native </span>
                    <span class="text-dev">What can I do to help you today ?!  </span>
                    <span class="text-dev-app"></span>
                    

                    <div className="container-social-media">
                      <a href="https://github.com/lfoliveir4"><img src={github} className="icon-social-media" /></a>
                      <a href="https://gitlab.com/lfoliveira.dev"><img src={gitlab} className="icon-social-media" /></a>
                      <a href="https://www.linkedin.com/in/lf-oliveira/"><img src={linkedin} className="icon-social-media" /></a>
                      <a href="https://twitter.com/lfoliveir4"><img src={twitter} className="icon-social-media" /></a>
                    </div>
                      <a href={`mailto:lfoliveira.dev@gmail.com`}><span class="text-email">lfoliveira.dev@gmail.com </span></a>
                      <a href={`mailto:lfoliveira.dev@gmail.com`}><span class="text-email">Obs: All apps are published to App Store and Play Store </span></a>
                    </div>
                  {/*
                    <div className={classes.root}>
                    <ColorButton variant="contained" color="primary" >
                      Get my work
                    </ColorButton>
                    </div>
                  */}
            </div>            
        </div>
      </div>
  );
}

export default Home;
