// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react'
import { configure, mount} from 'enzyme'
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from './App'
import NavBar from '../src/components/Home/Navbar/Navbar.js'

configure({adapter: new Adapter()});
describe('App', () => {
  let store
  const mockStore = configureStore();
  beforeEach(() => {
    store = mockStore([]);
  });
    it('NavBar should render on all routes', () => {
      const wrapper = mount(
          <Provider store={store}>
             <MemoryRouter initialEntries={[ `/` ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(NavBar)).to.have.lengthOf(1)
    }) 
  });





// test('renders content', () => {
//     const countryDetail = {
//         content: 'This is a test',
//         important: true
//     }
//     const component = render(<Landing />)
//     console.log(component);
// })




// const { Country, conn } = require('../../src/db.js');
// const { expect } = require('chai');

// describe('Country model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Country.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Country.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Country.create({ name: 'Argentina' });
//       });
//     });
//   });
// });
