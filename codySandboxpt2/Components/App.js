import React from 'react';
import Recipes, { List } from './Recipes';
import Recipe from './Recipe';

export default function App() {
  return (
    <>
      <List list={[]} render={character => (
        <li>
          <Recipe {...recipe} />
        </li>
      )} />

      <Recipes recipes={[]} />
    </>
  );
}

