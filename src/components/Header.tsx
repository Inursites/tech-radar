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
        <a className="social-icon" title="github"
          href="https://github.com/pulsarforge" target="_BLANK" rel="noopener noreferrer">
          <img alt="github" src={githubLogo}></img>
        </a>
      </Typography>
      {this.props.children}
    </>
  );
}

