import React from 'react'
import { Button, Form, Container, Grid, Header, Divider } from 'semantic-ui-react'
import { constants } from 'utils/constants';

const { inputPlaceholder, formLabel } = constants;

const SearchForm = () => (
  <Container>
    <Form>
      <Grid centered>
        <Grid.Row style={{padding: 0}}>
          <Grid.Column width={3}>
            <Header as='h2' textAlign='center' size='medium'>{formLabel}</Header>
          </Grid.Column>
        </Grid.Row>


        <Grid.Column width={6}>
          <input placeholder={inputPlaceholder} />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button type='submit'>Add city</Button>
        </Grid.Column>
      </Grid>
    </Form>

    <Divider />
  </Container>
)

export default SearchForm ;