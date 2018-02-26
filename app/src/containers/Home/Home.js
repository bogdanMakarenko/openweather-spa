import React from 'react'
import { Divider } from 'semantic-ui-react';
import { SearchForm, CardList } from 'Components';

let cities = [ 'kiev', 'london', 'prague' ];

localStorage.setItem('cities', JSON.stringify(cities));
// JSON.parse(localStorage.getItem('cities'));

const Home = () => (
  <main>
    <SearchForm />
    <CardList cities={JSON.parse(localStorage.getItem('cities'))} />
  </main>
);

export default Home;