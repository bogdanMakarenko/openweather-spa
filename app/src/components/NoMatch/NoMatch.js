import React from 'react';
import { Link } from 'react-router-dom';
import { constants } from 'utils/constants';
import './NoMatch.scss';

const {pageNotFound, backToHomepage} = constants;

const NoMatch = () =>
  <main className='not-found-container'>
    <div className='not-found-content'>
      <h1 className='not-found-code'>404</h1>
      <span className='not-found-text'>{pageNotFound}</span>
      <Link className='not-found-link' to='/'>{backToHomepage}</Link>
    </div>
  </main>

export default NoMatch;