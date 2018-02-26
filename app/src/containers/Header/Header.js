import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Image } from 'semantic-ui-react';
import { constants } from 'utils/constants';
import logo from 'images/logo_OpenWeatherMap_orange.svg';

const headerStyle = {
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '1.6rem'
};

const {segmentStyle, mainHeader} = constants;

const Header = () => (
  <header>
    <Segment
        inverted
        color='black'
        style={segmentStyle}
    >
      <Grid container verticalAlign='middle' columns='equal'>
        <Grid.Column width={4}>
          <Link to='/'>
            <Image src={logo} size='medium' />
          </Link>
        </Grid.Column>
        <Grid.Column width={8} textAlign='center'>
          <h1 style={headerStyle}>
            {mainHeader}
          </h1>
        </Grid.Column>
      </Grid>
    </Segment>
  </header>
);

export default Header;