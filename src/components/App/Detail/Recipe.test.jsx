import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../Recipe';

describe('Recipe component', () => {
  it('renders a Recipe', () => {
    const wrapper = shallow(<Recipe
      title= 'spaghetti'
      image='https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg'
      //still react component 
      ingredients={[
        {
          name: 'butter'
        }
      ]}
      measures={
        {
          us: '1 tps'
        }
      }
      instructions='some long instrcutions'
    
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

//its not done we have to fixed the component 
