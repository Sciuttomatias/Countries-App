import React from 'react'
import { configure, mount} from 'enzyme'
import { expect } from 'chai';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from './App'
import Landing from './components/Landing/Landing.js'

configure({adapter: new Adapter()});
describe('App', () => {
  let store
  const mockStore = configureStore();
  beforeEach(() => {
    store = mockStore([]);
  });
    it('Landing component should render on main route', () => {
      const wrapper = mount(
          <Provider store={store}>
             <MemoryRouter initialEntries={[ `/` ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Landing)).to.have.lengthOf(1)
    }) 
  });
