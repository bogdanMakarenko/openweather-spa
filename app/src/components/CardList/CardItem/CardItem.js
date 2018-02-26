import React from 'react';
import { Button, Card, Image, List } from 'semantic-ui-react';
import {constants} from '../../../utils/constants';

const { buttonTextCI } = constants;

const CardItem = ({weatherInfo}) => {

    const { humidity, pressure, temp } = weatherInfo.main;
    const { description, icon} = weatherInfo.weather[0];
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>
            {weatherInfo.name}
          </Card.Header>
          <Card.Meta>
            t: {temp}
          </Card.Meta>
          <p>{description}</p>
          <Card.Description>
            <List items={[ `Humidity: ${humidity} %`, `Pressure: ${pressure} hpa`, ]} />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color='blue'>{buttonTextCI}</Button>
        </Card.Content>
      </Card>
    )
};

export default CardItem;