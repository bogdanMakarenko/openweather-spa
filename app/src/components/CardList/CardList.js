import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Container, Header, Dimmer, Loader } from 'semantic-ui-react';
import { CardItem } from 'Components';
import { constants } from 'utils/constants';
import {getCityWeather} from '../../redux/actions';

const { cardsSectionHeader } = constants;

class CardList extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    return (
      this.props.data ?
        <Container>
          <Header as='h2' size='medium' textAlign='center'>{cardsSectionHeader}</Header>
          <Card.Group>
            {this.props.data.map(city =>
              <CardItem key={city.id} weatherInfo={city} />
            )}
          </Card.Group>
        </Container>
        : <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
    )
  }
};

const mapStateToProps = state => ({
  data: state.CardList.data,
});

const mapDispatchToProps = dispatch => ({
  getWeatherData: bindActionCreators(getCityWeather, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);