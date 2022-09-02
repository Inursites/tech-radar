import React from 'react';
import  githubLogo  from '../img/GitHub-Mark-32px.png';
import { Typography } from '@material-ui/core';

export class Header extends React.Component {
  render = () => (
    <>
      <Typography variant="h4">
        Awesome Web3 Radar
      </Typography>

      <Typography variant="subtitle1">
        <a className="social-icon" title="Fork me at github"
          href="https://github.com/Inursites/tech-radar" target="_BLANK" rel="noopener noreferrer">
          <img alt="github" src={githubLogo}></img>
        </a>
      </Typography>
      {this.props.children}
    </>
  );
}

