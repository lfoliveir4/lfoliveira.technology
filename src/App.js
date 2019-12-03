import React from 'react';
import logo from './logo.svg';
import './App.css';

import icon from './images/icon.jpeg'
import twitter from './images/twitter.png'
import linkedin from './images/linkedin-icon.jpg'
import gitlab from './images/gitlab.png'
import github from './images/github.svg'

function App() {
  return (
      <div class="container demo">
        <div class="content">
            <div id="large-header" class="large-header">
              <div class="container-box">

                <div className="container-icon">
                  <img src ={icon} className="icon" />
                </div>

                <span class="text-name">Luis Filipe Alves de Oliveira</span>
                <span class="text-dev">Desenvolvedor React | React Native </span>

                <div className="container-social-media">
                  <a href="https://github.com/lfoliveir4"><img src={github} className="icon-social-media" /></a>
                  <a href="https://gitlab.com/lfoliveira.dev"><img src={gitlab} className="icon-social-media" /></a>
                  <a href="https://www.linkedin.com/in/lf-oliveira/"><img src={linkedin} className="icon-social-media" /></a>
                  <a href="https://twitter.com/lfoliveir4"><img src={twitter} className="icon-social-media" /></a>
                </div>
                <span class="text-email">lfoliveira.dev@gmail.com </span>

              </div>
            </div>
        </div>
      </div>
  );
}

export default App;
